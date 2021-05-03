import React from 'react';
import StockConfiguration from './StockConfiguration';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/configureStore';

const store = configureStore();

describe('Stock Configuration component', () => {
    it('select time', () => {
        render(
            <Provider store={store}>
                <StockConfiguration />
            </Provider>
        );
        const select = screen.getByTestId('select-time');
        expect(select.length).toBe(4);
    });

    it('Stock symbol input', () => {
        render(
            <Provider store={store}>
                <StockConfiguration />
            </Provider>
        );
        const input = screen.getByTestId('symbol-input');
        expect(input).toBeTruthy();
    });
    it('Stock configuration submit', () => {
        render(
            <Provider store={store}>
                <StockConfiguration />
            </Provider>
        );
        const button = screen.getByTestId('change-submit');
        expect(button).toBeTruthy();
    });
});
