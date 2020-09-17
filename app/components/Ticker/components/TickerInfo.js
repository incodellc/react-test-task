import React from 'react';
import PropTypes from 'prop-types';

function TickerInfo({ tickerData }) {
  const { ticker, exchange, last_trade_time, ...data } = tickerData[0];

  return tickerData[0] ? (
    <div data-testid="ticker-info">
      <div className="flex items-center mb-3">
        <h3
          className="text-xl font-black uppercase"
          data-testid="ticker-info-title"
        >
          {ticker}
        </h3>
        <span data-testid="ticker-info-exchange" className="ml-2 text-gray-500">
          ({exchange})
        </span>
      </div>
      <hr />
      <ul
        className="flex flex-wrap items-center mt-2"
        data-testid="ticker-info-list"
      >
        {Object.entries(data).map(([key, val]) => (
          <li
            className="w-1/2 my-1"
            data-testid="ticker-info-list-item"
            key={key}
          >
            <span className="capitalize">{key.split('_').join(' ')}:</span>
            <span className="ml-2 text-lg font-bold">{val}</span>
          </li>
        ))}
        <li data-testid="ticker-info-date">
          <span className="capitalize">Last trade time:</span>
          <span className="ml-2 text-lg font-bold">
            {last_trade_time.slice(11, 19)}
          </span>
        </li>
      </ul>
    </div>
  ) : null;
}

TickerInfo.propTypes = {
  tickerData: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
      exchange: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      change: PropTypes.string.isRequired,
      change_percent: PropTypes.string.isRequired,
      last_trade_time: PropTypes.string.isRequired,
      dividend: PropTypes.string.isRequired,
      yield: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TickerInfo;
