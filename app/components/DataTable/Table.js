import React from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = (props)=> {
    function getLastTradeTime(tickerDataArr) {
        console.log(tickerDataArr);
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
    const {tickerData} = props;
    return (
        <table>
            <TableHead changeDate = {getLastTradeTime(tickerData)}/>
            <tbody>
                {tickerData.map((item, idx, arr)=>{
                    return (<TableBody key={idx + 1}
                                       tickerDataObj = {item}
                                       isUpArrow = {getUpOrDownArrow(item, idx, arr)}/>);
                })}
            </tbody>
        </table>
        );
};

Table.propTypes = {
    tickerData: PropTypes.array
};

export default Table;
