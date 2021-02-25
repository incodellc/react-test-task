import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
    const tickers = useSelector(state => state.stockTicker.tickers);
    const ticker = tickers[tickers.length - 1];

    return (
        <div className="detail">
            <ul className="detail__list">
                <li className="detail__item">
                    <span>Ticker</span>
                    <span>{ticker.ticker}</span>
                </li>
                <li className="detail__item">
                    <span>Exchange</span>
                    <span>{ticker.exchange}</span>
                </li>
                <li className="detail__item">
                    <span>Price</span>
                    <span>{ticker.price}</span>
                </li>
                <li className="detail__item">
                    <span>Change</span>
                    <span>{ticker.change}</span>
                </li>
                <li className="detail__item">
                    <span>Change percent</span>
                    <span>{ticker.change_percent}</span>
                </li>
                <li className="detail__item">
                    <span>Last trade time</span>
                    <span>{ticker.last_trade_time}</span>
                </li>
                <li className="detail__item">
                    <span>Dividend</span>
                    <span>{ticker.dividend}</span>
                </li>
                <li className="detail__item">
                    <span>Yield</span>
                    <span>{ticker.yield}</span>
                </li>
            </ul>
        </div>
    );
};

export default Detail;
