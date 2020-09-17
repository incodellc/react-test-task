import reducer, { initialState } from '../../../modules/Tickers/reducer';
import {
  addTicker,
  deleteTicker,
  updateTickerData,
} from '../../../modules/Tickers/actions';

const data = {
  ticker: 'test',
  exchange: 'NASDAQ',
  price: '291.63',
  change: '171.70',
  change_percent: '0.72',
  last_trade_time: '2020-02-08T15:02:03.000Z',
  dividend: '0.55',
  yield: '1.51',
};

describe('Tickers module reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle ADD_TICKER', () => {
    const action = addTicker({ name: 'test' });
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tickers: [...initialState.tickers, 'test'],
    });
  });

  test('should handle REMOVE_TICKER', () => {
    const state = { ...initialState, tickers: ['test'] };
    const action = deleteTicker({ name: 'test' });
    expect(reducer(state, action)).toEqual({ ...initialState, tickers: [] });
  });

  test('should handle UPDATE_TICKER_DATA', () => {
    const name = data.ticker;
    const action = updateTickerData({ name, data });
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tickersData: { [name]: [data] },
    });
  });
});
