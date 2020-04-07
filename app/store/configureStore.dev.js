// import createHistory from 'history/createBrowserHistory';
const createHistory = require('history').createBrowserHistory;
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
// import rootReducer from '../reducers';
import stockTickerReducer from '../reducers/StockTickerReducer';
import DevTools from '../containers/DevTools';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        stockTickerReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, middleware),
            DevTools.instrument()
        )
    );
}
