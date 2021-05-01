import { createConnection, breakConnection } from './index';
import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

const stock = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '116.60',
    change: '-0.46',
    change_percent: '-0.39',
    last_trade_time: 'Oct 21, 4:00PM EDT',
    dividend: '0.57',
    yield: '1.96'
};

// const ticker = 'AAPL';
// const time = 2000;

beforeEach(() => {
    moxios.install();
});

afterEach(() => {
    moxios.uninstall();
});

beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
});

describe('create connection action', () => {
    it('should add stock to store', () => {
        store.dispatch(createConnection(stock));
        const expectedAction = {
            type: 'CREATE_CONNECTION', payload: stock
        };
        expect(store.getActions()).toEqual([expectedAction]);
    });
});

describe('Break connection action', () => {
    it('Should clean stock history', () => {
        store.dispatch(breakConnection());
        const expectedAction = {
            type: 'BREAK_CONNECTION', payload: {}
        };

        expect(store.getActions()).toEqual([expectedAction]);
    });
});

describe('change delay time', () => {
    it('should update deley time', () => {
        moxios.wait(() => {
            const request = moxios.requests.deleyTimeChange(5000);
            request.respondWith({
                status: 200,
            });
        });
    });
});
