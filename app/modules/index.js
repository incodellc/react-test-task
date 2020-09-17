import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import TickersReducer from './Tickers/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    TickersReducer,
  });
