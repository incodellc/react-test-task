import React from 'react';
import * as redux from 'react-redux';
import ActualPrice from '../ActualPrice/ActualPrice';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../mockStore';


describe('Actual price', () => {
    test('renders Actual price component', () => {
        render(
            <Provider store={store}>
                <ActualPrice />
            </Provider>
        );
        const actualState = store.getState();
        const state = actualState.stockTicker.payload;
        const spy = jest.spyOn(redux, 'useSelector');
        spy.mockReturnValue(state);
        const price = actualState.stockTicker.payload.price > 1;

        expect(screen.getByText('Actual price:')).toBeInTheDocument();
        expect(price).toBe(true);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});

