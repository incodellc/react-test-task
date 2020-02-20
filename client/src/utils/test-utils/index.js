import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { initState, reducer } from '../../store/reducer';
import { quotesExample } from '../presets';

const mockState = { ...initState, quotes: quotesExample.slice()};

export const renderWithRedux = (component, state = mockState) => {
    const store = createStore(reducer, state, compose(applyMiddleware(thunk)));
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store
    };
};