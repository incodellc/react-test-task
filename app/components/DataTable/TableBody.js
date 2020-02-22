import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props)=> {
    const {tickerData, isUpArrow} = props;

    function getUpOrDownArrowForPrice(elem) {
        let arrow;
        if(elem === 'price') {
            arrow = isUpArrow ? <span id="upArrow">&uarr;</span> :
                                <span id="downArrow">&darr;</span>;
        }else{
            arrow = null;
        }
        return arrow;
    }
    return (
        <tr>
            {Object.keys(tickerData).
                map((item, idx)=>(
                    <td key={idx + 1} id={item}>
                        {tickerData[item]}
                        {getUpOrDownArrowForPrice(item)}
                    </td>
                ))
            }
        </tr>
	);
};

TableBody.propTypes = {
    tickerData: PropTypes.object,
    isUpArrow: PropTypes.bool
};

export default TableBody;
