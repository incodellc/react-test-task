import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({changeDate})=> {
    function getHumanTime(changeDateProp) {
        const fulldate = new Date(changeDateProp);
        return fulldate.toLocaleTimeString();
    }
    return (
    	<thead>
  			<tr>
                <td colSpan={4}>
                    {`Last change: ${getHumanTime(changeDate)}`}
                </td>
            </tr>
			<tr>
				<th>Ticker</th>
				<th>Price</th>
				<th>Change, %</th>
				<th>Dividend</th>
			</tr>
		</thead>
    );
};

TableHead.propTypes = {
    changeDate: PropTypes.string,
};

export default TableHead;
