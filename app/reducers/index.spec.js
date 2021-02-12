import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer from './index';

const history = createBrowserHistory();
const store = createStore(createRootReducer(history));

describe('Reducer init state test', () => {
    it('Init reducer', () => {
        const state = store.getState();
        expect(typeof state.router).toBe('object');
        expect(typeof state.stockTicker).toBe('object');
        expect(typeof state.stockInterval).toBe('number');
    });
});