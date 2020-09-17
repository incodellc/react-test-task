import React from 'react';
import { screen } from '@testing-library/react';
import { RenderWithRedux } from '../../../utils/tests';
import App from '../../../components/App';
import TickersReducer, { initialState } from '../../../modules/Tickers/reducer';

const renderWithRedux = RenderWithRedux(
  { TickersReducer },
  { TickersReducer: initialState }
);

describe('<App />', () => {
  test('should renders without crashing', async () => {
    renderWithRedux(<App />);
    expect(screen.getByTestId('app'));
    expect(screen.getByTestId('form'));
  });
});
