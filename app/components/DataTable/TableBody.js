import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props)=> {
    const {tableBodyProps, isUpArrow} = props;
    const {ticker, price, changePercent, dividend} = tableBodyProps;
    return (
        <tr>
            <td id="ticker">{ticker}</td>
            <td id="price">
                {price}
                {isUpArrow ? <span id="upArrow">&uarr;</span> :
                             <span id="downArrow">&darr;</span>}
            </td>
            <td id="chngPercent">{`${changePercent}%`}</td>
            <td id="dividend">{dividend}</td>
        </tr>
	);
};

TableBody.propTypes = {
    tableBodyProps: PropTypes.object,
    isUpArrow: PropTypes.bool
};

export default TableBody;
