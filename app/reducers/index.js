import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import stockTicker from '../reducers/stockTicker';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker,
});

export default createRootReducer;
