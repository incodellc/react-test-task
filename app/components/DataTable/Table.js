import React from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = (props)=> {
    function getLastTradeTime(tickerDataArr) {
        const arrLen = tickerDataArr.length;
        return arrLen !== 0 ? tickerDataArr[arrLen - 1].last_trade_time : '0';
    }
    function getUpOrDownArrow(item, index, array) {
        let isUpArrow;
        if(index === 0 || array[index - 1].price < item.price) {
            isUpArrow = true;
        } else {
            isUpArrow = false;
        }
        return isUpArrow;
    }
    const {tickerDataArr} = props;
    return (
        <table>
            <TableHead changeDate = {getLastTradeTime(tickerDataArr)}/>
            <tbody>
                {tickerDataArr.map((item, idx, arr)=>{
                    const tableBodyProps = {ticker: item.ticker,
                                            price: item.price,
                                            dividend: item.dividend,
                                            changePercent: item.change_percent};
                    return (<TableBody key={idx + 1}
                                       tableBodyProps = {tableBodyProps}
                                       isUpArrow = {getUpOrDownArrow(item, idx, arr)}/>);
                })}
            </tbody>
        </table>
        );
};

Table.propTypes = {
    tickerDataArr: PropTypes.array
};

export default Table;
