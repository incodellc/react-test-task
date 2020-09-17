import React from 'react';
import { render } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

export const RenderWithRedux = (reducer, initialState) => (Component) => {
  const store = createStore(combineReducers(reducer), initialState);
  return {
    ...render(<Provider store={store}>{Component}</Provider>),
    store,
  };
};
