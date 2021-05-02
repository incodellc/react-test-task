import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import stockTicker from '../redux/features/stocks/stockTicker';
import stockUpdateTime from '../redux/features/stocks/stockInterval';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTickers: stockTicker,
    stockUpdateTime
});

export default createRootReducer;
