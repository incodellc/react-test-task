import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { configureStore } from '../store/configureStore';

const store = configureStore();

describe('App', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    it('Render header', () => {
        expect(screen.getByTestId('stock-header')).toBeTruthy();
    });
});
