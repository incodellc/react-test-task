import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer from './index';

const history = createBrowserHistory();
const store = createStore(createRootReducer(history));

describe('Root Reducer', () => {
    it('init', () => {
        const state = store.getState();
        expect(typeof state.router).toBe('object');
        expect(typeof state.stockTicker).toBe('object');
        expect(typeof state.refreshInterval).toBe('number');
    });
});
