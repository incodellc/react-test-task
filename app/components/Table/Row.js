import React from 'react';
import { prepareDate } from '../../utils';

// eslint-disable-next-line react/prop-types
const Row = ({ row }) => {
    return (
        <tr className="table__row table__row_tbody">
            <td className="table__cell table__cell_tbody">{row.ticker}</td>
            <td className="table__cell table__cell_tbody">
                {prepareDate(row.last_trade_time)}
            </td>
            <td className="table__cell table__cell_tbody">{row.price}</td>
        </tr>
    );
};

export default Row;
