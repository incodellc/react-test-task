import StockCart from './StockCart';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const dummyState = {
    stockTicker: {
        data: [
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '116.60',
                change: '-0.46',
                change_percent: '-0.39',
                last_trade_time: 'Oct 21, 4:00PM EDT',
                dividend: '0.57',
                yield: '1.96'
            },
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '116.60',
                change: '-0.46',
                change_percent: '-0.39',
                last_trade_time: 'Oct 21, 4:00PM EDT',
                dividend: '0.57',
                yield: '1.96'
            },
        ],
        loading: false,
        error: null,
    }
};

const initialState = {
    stockTicker: {
        data: [],
        loading: false,
        error: null,
        deleyTime: 5000,
        tickSymbol: 'AAPL',
    }
};

const initialStateError = {
    stockTicker: {
        data: [],
        loading: false,
        error: 'Error',
        deleyTime: 5000,
        tickSymbol: 'AAPL',
    }
};

describe('Stock ticker info', () => {
    it('Show loading if state is empty', () => {
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <StockCart />
            </Provider>
        );
        expect(screen.getByTestId('card-loading')).toBeTruthy();
    });
    it('Show stock ticekr info', () => {
        const store = mockStore(dummyState);
        render(
            <Provider store={store}>
                <StockCart />
            </Provider>
        );
        const { deleyTime } = store.getState(dummyState).stockTicker;
        // expect(state).toBeFalsy();
        setTimeout(() => {
            expect(screen.getByTestId('card-info')).toBeTruthy();
        }, deleyTime);
    });
    it('Show error', () => {
        const store = mockStore(initialStateError);
        render(
            <Provider store={store}>
                <StockCart />
            </Provider>, { initialState: initialStateError }
        );
        expect(screen.getByTestId('card-error')).toBeTruthy();
    });
});
