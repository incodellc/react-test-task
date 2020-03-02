import { createStore } from "redux";
import { tickersReducer } from "../reducers/tickerReducer";

export const INITIAL_STATE = {
  ticker: {}
};

export const store = createStore(
  tickersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
