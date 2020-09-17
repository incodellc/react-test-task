import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { RenderWithRedux } from '../../../utils/tests';
import Ticker from '../../../components/Ticker';
import TickersReducer, { initialState } from '../../../modules/Tickers/reducer';
import { deleteTicker } from '../../../modules/Tickers/actions';

const mockData = {
  ticker: 'test',
  exchange: 'NASDAQ',
  price: '291.63',
  change: '171.70',
  change_percent: '0.72',
  last_trade_time: '2020-02-08T15:02:03.000Z',
  dividend: '0.55',
  yield: '1.51',
};

const renderWithRedux = RenderWithRedux(
  { TickersReducer },
  { TickersReducer: { ...initialState, tickersData: { ['AAPL']: [mockData] } } }
);

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('<Ticker />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should renders without crashing', () => {
    renderWithRedux(<Ticker ticker={'AAPL'} />);
    expect(screen.getByTestId('ticker'));
    expect(screen.getByTestId('ticker-info'));
    expect(screen.getByTestId('ticker-graph'));
    expect(screen.getByTestId('ticker-delete'));
  });

  test('should call dispatch function after click on delete button', () => {
    renderWithRedux(<Ticker ticker={'AAPL'} />);
    fireEvent.click(screen.getByTestId('ticker-delete'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(deleteTicker({ name: 'AAPL' }));
  });
});
