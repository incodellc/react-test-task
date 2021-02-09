import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const setup = (store) =>
    mount(
        <Provider store={store}>
            <App />
        </Provider>
    ).find('App');

const initStore = {
    stockTicker: null,
};
const changedStore = {
    stockTicker: {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: '116.60',
        change: '-0.46',
        change_percent: '-0.39',
        last_trade_time: 'Oct 21, 4:00PM EDT',
        dividend: '0.57',
        yield: '1.96',
    },
};


describe('App with connected store', () => {
    it('should render alert about server connection', () => {
        const component = setup(mockStore(initStore));
        expect(component.find('.stock-ticker__empty').length).toBe(1);
    });

    it('should render StockCards', () => {
        const component = setup(mockStore(changedStore));
        expect(component.find('StockCard').length).toBe(1);
    });
});
