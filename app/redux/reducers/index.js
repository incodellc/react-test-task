import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { stockReducer } from './stock';
import { intervalReducer } from './interval';

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        stock: stockReducer,
        interval: intervalReducer,
    });

export default createRootReducer;
