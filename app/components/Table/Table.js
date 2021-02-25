import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row';

const Table = () => {
    const tickers = useSelector(state => state.stockTicker.tickers);

    return (
        <table className="table">
            <thead className="table__head">
                <tr className="table__row table__row_thead">
                    <th className="table__cell table__cell_thead">Ticker</th>
                    <th className="table__cell table__cell_thead">Last trade time</th>
                    <th className="table__cell table__cell_thead">Price</th>
                </tr>
            </thead>
            <tbody className="table__body">
                {tickers.map((item) => (
                    <Row
                        key={item.last_trade_time}
                        row={item}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
