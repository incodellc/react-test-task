import { updateStockPriceAction, UPDATE_TICKER_ACTION } from "./StockPriceAction";

describe('Stock price action', () => {

  it('should return obj with type and ticker data in payload', () => {
    const data = { first: 1, second: 2 };
    
    expect(updateStockPriceAction(data)).toEqual({
      type: UPDATE_TICKER_ACTION,
      payload: {
        first: 1,
        second: 2
      }
    });
  })
})