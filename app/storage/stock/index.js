import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { stockHistory } from './history/reducer';
import { stockTicker } from './ticker/reducer';

export const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        stockHistory,
        stockTicker,
    });
