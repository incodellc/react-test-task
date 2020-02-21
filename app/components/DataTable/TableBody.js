import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props)=> {
    const {ticker, price, dividend} = props.tickerDataObj;
    return (
        <tr>
            <td id="ticker">{ticker}</td>
            <td id="price">
                {price}
                {props.isUpArrow ? <span id="upArrow">&uarr;</span> :
                                   <span id="downArrow">&darr;</span>}
            </td>
            <td id="chngPercent">{`${props.tickerDataObj.change_percent}%`}</td>
            <td id="dividend">{dividend}</td>
        </tr>
	);
};

TableBody.propTypes = {
    tickerDataObj: PropTypes.object,
    isUpArrow: PropTypes.bool
};

export default TableBody;