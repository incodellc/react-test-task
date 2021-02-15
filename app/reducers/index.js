import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { tickerReducer } from './stockTicker';
import { intervalReducer } from './fetchInterval';

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        stockTicker: tickerReducer,
        fetchInterval: intervalReducer,
    });

export default createRootReducer;
