import React from 'react';

const TickerView = ({ data }) => {
  const {
    data: {
      ticker,
      exchange,
      price,
      change,
      change_percent,
      last_trade_time,
      dividend,
      ['yield']: yieldValue,
    },
  } = data;

  return (
    <div>
      <li>
        <p>Ticker:</p>
        <p>{ticker}</p>
      </li>
      <li>
        <p>Exchange:</p>
        <p>{exchange}</p>
      </li>
      <li>
        <p>Price:</p>
        <p>{price}</p>
      </li>
      <li>
        <p>Change:</p>
        <p>{change}</p>
      </li>
      <li>
        <p>Change percent:</p>
        <p>{change_percent}</p>
      </li>
      <li>
        <p>Last Trade Time:</p>
        <p>{new Date(last_trade_time).toUTCString()}</p>
      </li>
      <li>
        <p>Dividend:</p>
        <p>{dividend}</p>
      </li>
      <li>
        <p>Yield:</p>
        <p>{yieldValue}</p>
      </li>
    </div>
  );
};

export default TickerView;
