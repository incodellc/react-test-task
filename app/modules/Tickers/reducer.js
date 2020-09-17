import produce from 'immer';
import { ADD_TICKER, DELETE_TICKER, UPDATE_TICKER_DATA } from './constants';

export const initialState = { tickers: ['AAPL'], tickersData: {} };

export default produce((state, action) => {
  switch (action.type) {
    case ADD_TICKER: {
      const { name } = action.payload;
      const isNotExist = state.tickers.findIndex((n) => n === name) < 0;

      isNotExist && state.tickers.push(name);

      break;
    }

    case DELETE_TICKER: {
      const { name } = action.payload;
      const index = state.tickers.findIndex((n) => n === name);

      state.tickers.splice(index, 1);

      break;
    }

    case UPDATE_TICKER_DATA: {
      const { tickersData } = state;
      const { name, data } = action.payload;
      const currentTicker = tickersData[name] || [];

      currentTicker.length === 100 && (currentTicker.length = 0);

      state.tickersData[name] = [data, ...currentTicker];

      break;
    }
    default: {
      return state;
    }
  }
}, initialState);
