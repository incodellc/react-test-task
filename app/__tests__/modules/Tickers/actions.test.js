import {
  ADD_TICKER,
  DELETE_TICKER,
  UPDATE_TICKER_DATA,
} from '../../../modules/Tickers/constants';
import {
  addTicker,
  updateTickerData,
  deleteTicker,
} from '../../../modules/Tickers/actions';

describe('Tickers module actions', () => {
  test('should return an action with type `ADD_TICKER` and name `test` in payload', () => {
    const action = addTicker({ name: 'test' });
    expect(action).toEqual({ type: ADD_TICKER, payload: { name: 'test' } });
  });

  test('should return an action with type `DELETE_TICKER` and name `test` in payload', () => {
    const action = deleteTicker({ name: 'test' });
    expect(action).toEqual({ type: DELETE_TICKER, payload: { name: 'test' } });
  });

  test('should return an action with type `UPDATE_TICKER_DATA` and name `test` in payload', () => {
    const action = updateTickerData({ name: 'test', data: {} });
    expect(action).toEqual({
      type: UPDATE_TICKER_DATA,
      payload: { name: 'test', data: {} },
    });
  });
});
