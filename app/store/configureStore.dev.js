import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import DevTools from '../containers/DevTools';
import rootReducer from '../modules';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(thunkMiddleware, middleware), DevTools.instrument())
  );
}
