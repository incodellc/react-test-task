import React from 'react';
import PropTypes from 'prop-types';

import Table from '../components/DataTable';

const TableContainer = (props)=> {
    const {ticker, price, change_percent, dividend, last_trade_time} = props.dataObjArr;
    console.log(ticker, price, change_percent, dividend, last_trade_time, props.dataObjArr);
    return(<Table tickerDataArr = {props.dataObjArr}/>);
};

TableContainer.propTypes = {
    dataObjArr: PropTypes.array,
};

export default TableContainer;
