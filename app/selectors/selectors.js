import * as fromStockTicker from '../reducers/stockTickerReducer';

export const getCustomFetchInterval = state => fromStockTicker.getCustomFetchInterval(state.stockTicker);
export const getBufferData = state => fromStockTicker.getBufferData(state.stockTicker);
export const getCurrentData = state => fromStockTicker.getCurrentData(state.stockTicker);
