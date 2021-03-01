import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './stock';
import DevTools from '../containers/DevTools';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

let enhancer;
if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(middleware);
} else {
    enhancer = compose(
        applyMiddleware(thunkMiddleware, middleware),
        DevTools.instrument()
    );
}

export function configureStore(initialState) {
    return createStore(rootReducer(history), initialState, enhancer);
}

export const store = configureStore();
