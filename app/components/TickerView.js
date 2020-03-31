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
    <div className="ticker ticker_form">
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Ticker:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{ticker}</p>
      </li>
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Exchange:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{exchange}</p>
      </li>
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Price:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{price}</p>
      </li>
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Change:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{change}</p>
      </li>
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Change percent:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{change_percent}</p>
      </li>
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Last Trade Time:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{new Date(last_trade_time).toUTCString()}</p>
      </li>
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Dividend:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{dividend}</p>
      </li>
      <li className="ticker__list-item ticker__list-item_position">
        <p className="ticker__list-item-data ticker__list-item-data_size">Yield:</p>
        <p className="ticker__list-item-data ticker__list-item-data_size">{yieldValue}</p>
      </li>
    </div>
  );
};

export default TickerView;
