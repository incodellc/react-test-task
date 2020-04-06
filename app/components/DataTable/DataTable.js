import React from 'react';
import PropTypes from 'prop-types';

export const DataTable = ({ data }) => (
    <div className="table-container">
        <table className="table">
            <thead className="table__head">
            <tr className="table__row table__row_thead">
                <th className="table__cell table__cell_thead">Ticker</th>
                <th className="table__cell table__cell_thead">Exchange</th>
                <th className="table__cell table__cell_thead">Change</th>
                <th className="table__cell table__cell_thead">Change percent</th>
                <th className="table__cell table__cell_thead">Dividend</th>
                <th className="table__cell table__cell_thead">Yield</th>
                <th className="table__cell table__cell_thead">Last trade time</th>
                <th className="table__cell table__cell_thead">Price</th>
            </tr>
            </thead>
            <tbody className="table__body">
                {data.map((item, index) => (
                    <tr
                        key={index}
                        style={{backgroundColor: item.upward ? '#67c06d88' : '#be525288'}}
                        className="table__row table__row_tbody"
                    >
                    <td className="table__cell table__cell_tbody">{item.ticker}</td>
                    <td className="table__cell table__cell_tbody">{item.exchange}</td>
                    <td className="table__cell table__cell_tbody">{item.change}</td>
                    <td className="table__cell table__cell_tbody">{item.change_percent}</td>
                    <td className="table__cell table__cell_tbody">{item.dividend}</td>
                    <td className="table__cell table__cell_tbody">{item.yield}</td>
                    <td className="table__cell table__cell_tbody">{item.last_trade_time}</td>
                    <td className="table__cell table__cell_tbody">{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);

DataTable.propTypes = {
    data: PropTypes.array.isRequired
};
