import stockTickerReducer from "./StockTickerReducer";

describe('Reducer function', () => {
  const action = {
    type: 'ticker.update',
    payload: {
      first: 1,
      second: 2
    }
  };
  it('should return new state (prev state + current action)', () => {
    let state = {
      initial: 'default'
    };
    expect(stockTickerReducer(state, action)).toEqual({
      initial: 'default',
      tickerData: {
        first: 1,
        second: 2
      }
    });
  })
})