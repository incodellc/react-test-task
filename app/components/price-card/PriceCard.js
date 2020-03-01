import React from 'react';
import { connect } from 'react-redux';
import CardListRow from '../card-list-row';

const underscoreToSpace = str => {
    return str.replace(/_/g, ' ');
};

const PriceCard = state => {
    const currentPrice = Object.entries(state.current);
    const previousPrice = Object.entries(state.previous);

    const dataRows = currentPrice.map((param, idx) => {
        let newData = param[1];
        let priceChange = null;

        switch (param[0]) {
            case 'price':
                if (previousPrice.length > 0) {
                    priceChange =
                        Number(param[1]) - Number(previousPrice[idx][1]);
                }
                break;
            case 'last_trade_time':
                newData = new Date(param[1]).toLocaleString();
                break;
            default:
                break;
        }

        return (
            <CardListRow
                rowName={underscoreToSpace(param[0])}
                rowData={newData}
                priceChange={priceChange}
                key={idx}
            />
        );
    });

    return (
        <div className="card">
            <ul className="list-group list-group-flush">{dataRows}</ul>
        </div>
    );
};

const mapStateToProps = state => ({
    current: state.current,
    previous: state.previous,
    updateInterval: state.updateInterval
});

export default connect(mapStateToProps)(PriceCard);
