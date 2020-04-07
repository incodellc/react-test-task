// import createHistory from 'history/createBrowserHistory';
const createHistory = require('history').createBrowserHistory;
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// import rootReducer from '../reducers';
import stockTickerReducer from '../reducers/StockTickerReducer';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        stockTickerReducer,
        initialState,
        applyMiddleware(middleware),
    );
}
