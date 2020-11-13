import React from 'react';
import * as redux from 'react-redux';
import Details from '../Details/Details';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../mockStore';

test('renders Details component', () => {
    render(
        <Provider store={store}>
            <Details />
        </Provider>
    );

    const actualState = store.getState();
    const state = actualState.stockTicker.payload;
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue(state);
    const stateLength = Object.keys(state).length;

    expect(screen.getByText(/details/i)).toBeInTheDocument();
    expect(stateLength).toBe(8);
});


