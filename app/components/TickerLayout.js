import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TickerLayout = ({ tickerData }) => {
    const data = tickerData.map(ticker => ({
        name: ticker.last_trade_time.match(/\d{2}:\d{2}:\d{2}/)[0],
        price: +ticker.price,
    }));

    return (
        <div className="container">
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
                    {tickerData.map((item, index) => (
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
            </div>
            <div className="chart">
                <ResponsiveContainer>
                    <AreaChart
                        data={data.reverse()}
                        margin={{
                            top: 0, right: 0, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" stroke="#d31919" fill="#be525288" isAnimationActive={false} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tickerData: state.tickerData
});

TickerLayout.propTypes = {
    tickerData: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(TickerLayout);
