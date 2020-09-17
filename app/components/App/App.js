import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../Form';
import Ticker from '../Ticker';

const App = () => {
  const tickers = useSelector(({ TickersReducer }) => TickersReducer.tickers);
  return (
    <article
      className="tickers min-h-screen py-16 font-sm text-gray-700 bg-gray-100"
      data-testid="app"
    >
      <div className="container mx-auto px-5">
        <h1
          className="mb-3 text-4xl font-black capitalize"
          data-testid="app-title"
        >
          Stock Blotter
        </h1>
        <Form />
        {tickers.length ? (
          tickers
            .map((ticker) => <Ticker key={ticker} ticker={ticker} />)
            .reverse()
        ) : (
          <p
            className="mt-5 text-center text-3xl font-black text-gray-300"
            data-testid="app-no-tickers"
          >
            NO STOCK TICKERS
          </p>
        )}
      </div>
    </article>
  );
};

export default App;
