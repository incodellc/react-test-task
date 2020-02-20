import React from 'react';

import connect from 'react-redux/lib/components/connect';
import './PricePanel.scss';
import BlockForData from '../BlockForData/BlockForData';
import loader from './loader.svg';
import ProgressChangeValue from '../ProgressChangeValue/ProgressChangeValue';
import PropTypes from 'prop-types';

export const getListBlocksForData = (objWithData) => {
    const keysObj = Object.keys(objWithData);
    return keysObj.map((key, index) => {
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
};

// eslint-disable-next-line react/prop-types,react/no-multi-comp
const PricePanel = ({stockTicker}) => (
    <div className="data-panel">
        {stockTicker.price
            ? getListBlocksForData(stockTicker)
            : <img src={loader} alt="loading" style={{margin: '0 auto'}}/>}
    </div>
);

BlockForData.propTypes = {
    stockTicker: PropTypes.object,
};

const mapStateToProps = (state) => ({stockTicker: state});

export default connect(mapStateToProps)(PricePanel);
