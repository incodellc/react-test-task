import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from '../../services/';
import { deleteTicker } from '../../modules/Tickers/actions';
import TickerInfo from './components/TickerInfo';
import TickerGraph from './components/TickerGraph';

const Ticker = ({ ticker }) => {
  const dispatch = useDispatch();
  const tickersData = useSelector(
    ({ TickersReducer }) => TickersReducer.tickersData
  );
  const [socket, setSocket] = useState(null);

  const handleDeleteTicker = () => dispatch(deleteTicker({ name: ticker }));

  useEffect(() => {
    setSocket(connect(ticker));
    return () => {
      socket && socket.disconnect();
    };
  }, []);

  return tickersData[ticker] ? (
    <article
      className="flex flex-wrap lg:flex-no-wrap items-start"
      data-testid="ticker"
    >
      <section className="relative w-full lg:w-1/2 lg:mr-3 mt-6 px-6 py-4 rounded-lg shadow-lg bg-white">
        <button
          data-testid="ticker-delete"
          className="absolute top-0 right-0 py-4 px-6 text-xl text-gray-500"
          onClick={handleDeleteTicker}
        >
          &#x2715;
        </button>
        <TickerInfo tickerData={tickersData[ticker]} />
      </section>
      <section className="relative w-full lg:w-1/2 lg:ml-3 mt-6 px-6 py-4 rounded-lg shadow-lg bg-white">
        <TickerGraph tickerData={tickersData[ticker]} />
      </section>
    </article>
  ) : null;
};

Ticker.propTypes = {
  ticker: PropTypes.string.isRequired,
};

export default Ticker;
