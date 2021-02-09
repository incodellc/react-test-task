import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { stocksReducer, intervalReducer } from './stocks';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: stocksReducer,
    refreshInterval: intervalReducer
});

export default createRootReducer;
