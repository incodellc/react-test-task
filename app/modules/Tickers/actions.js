import { ADD_TICKER, DELETE_TICKER, UPDATE_TICKER_DATA } from './constants';

export const addTicker = (payload) => ({
  type: ADD_TICKER,
  payload,
});

export const deleteTicker = (payload) => ({
  type: DELETE_TICKER,
  payload,
});

export const updateTickerData = (payload) => ({
  type: UPDATE_TICKER_DATA,
  payload,
});
