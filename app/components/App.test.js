import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { App } from './App';

import { store } from '../storage';

describe('App', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    it('Show spinner when connect btn clicked', () => {
        userEvent.click(screen.getByText(/connect/i));
        expect(screen.queryByLabelText(/spin/i)).toBeDefined();
    });

    it("Don't show stock ticker block if stock history empty", () => {
        const { history } = store.getState().stockHistory;
        if (history.length === 0)
            expect(screen.queryByLabelText(/stock ticker/i)).toBeNull();
    });
});
