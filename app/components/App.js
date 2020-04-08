import '../styles/application.scss';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// The below line is here as an example of getting prices
connect('AAPL');

export const App = ({prices = []}) => {
    // console.log(props);
    return (
        <div className="stock-ticker">
            <h1>Stock Blotter</h1>
            <table>
                <tr>
                    <th>ticker</th>
                    <th>exchange</th>
                    <th>price</th>
                    <th>change</th>
                    <th>change_percent</th>
                    <th>last_trade_time</th>
                    <th>dividend</th>
                    <th>yield</th>
                </tr>
            </table>
            {prices.map( (p, index) => {
                let className = 'normal';
                if(index < prices.length - 1) {
                    const prevPrice = prices[index + 1];
                    className = p.price > prevPrice.price ? 'higher' : 'lower';
                }
                return (<tr key={p.id} className={className}>
                    <td>{p.ticker}</td>
                    <td>{p.exchange}</td>
                    <td>{p.price}</td>
                    <td>{p.change}</td>
                    <td>{p.change_percent}</td>
                    <td>{p.last_trade_time}</td>
                    <td>{p.dividend}</td>
                    <td>{p.yield}</td>
                </tr>);
            })}
        </div>
    );
};
App.propTypes = {
    prices: PropTypes.array,
};

