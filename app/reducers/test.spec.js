import { setTicker } from "../store/actionCreators";
//import "@testing-library/react";
import createRootReducer from "./index";

describe("Ticker reducer: ", () => {
  test("should become a ticker obj", () => {
    let ticker = {
      ticker: "AAPL",
      exchange: "NASDAQ",
      price: "116.60",
      change: "-0.46",
      change_percent: "-0.39",
      last_trade_time: "Oct 21, 4:00PM EDT",
      dividend: "0.57",
      yield: "1.96",
    };
    let action = setTicker(ticker);
    let state = {};

    let newState = createRootReducer.stockTicker(state, action);

    expect(newState.stockTicker).toMatchObject(ticker);
  });
});
