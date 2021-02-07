import { get } from 'lodash';

export const priceSelector = (state) => get(state.stockTicker, 'price', null);
export const yieldSelector = (state) => get(state.stockTicker, 'yield', null);
export const stockTickerSelector = (state) => get(state, 'stockTicker', {});

