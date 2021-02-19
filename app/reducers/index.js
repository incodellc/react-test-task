import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {stockTicker} from './stockTicker';
import {currentTicker} from './currentTicker';
import {interval} from './interval';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker,
    currentTicker,
    interval
});

export default createRootReducer;
