import React, {PureComponent} from 'react';

import connect from 'react-redux/lib/components/connect';
import './PricePanel.scss';
import BlockForData from '../BlockForData/BlockForData';
import ProgressChangeValue from '../ProgressChangeValue/ProgressChangeValue';

class PricePanel extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isUpPrice: true,
        };
    }

    getListBlocksForData(objWithData) {
        const keysObj = Object.keys(objWithData);
        const listBlock = keysObj.map((key, index) => {
            let title = key.toUpperCase().replace(/_/g, ' ');
            let value = objWithData[key];

            if (key === 'last_trade_time') {
                const updateDate = new Date(value);
                value = `${updateDate.getHours()}:${updateDate.getMinutes()}:${updateDate.getSeconds()}`;
            } else if (key === 'price') {
                value = <ProgressChangeValue price={value}/>;
            }
            return <BlockForData key={index} title={title}>{value}</BlockForData>;
        });

        return listBlock;
    }

    render() {
        const stockTicker = this.props.stockTicker;

        console.log('stockTicker', stockTicker);
        return (
            <div className="data-panel">
                {this.getListBlocksForData(stockTicker)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({stockTicker: state});

export default connect(mapStateToProps)(PricePanel);
