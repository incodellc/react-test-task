import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { stockIntervalReducer } from './stockIntervalReducer';
import { stockReducer } from './stockReducer';

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        stockTicker: stockReducer,
        stockInterval: stockIntervalReducer,
    });

export default createRootReducer;
