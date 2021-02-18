import React from 'react';
import PropTypes from 'prop-types';


function ExchangeData({ticker}) {
    return (
        <div>
            <p>Stock name: {ticker.ticker}</p>
            <p>Exchange: {ticker.exchange}</p>
            <p>Price: {ticker.price}</p>
            <p>Change: {ticker.change}</p>
            <p>Change %: {ticker.change_percent}</p>
            <p>Last trade time: {ticker.last_trade_time}</p>
            <p>Dividend: {ticker.dividend}</p>
            <p>Yield: {ticker.yield}</p>
        </div>
    );
}

ExchangeData.propTypes = {
    ticker: PropTypes.object
};

export default ExchangeData;
