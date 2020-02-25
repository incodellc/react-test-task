import { createAsyncActions } from '@letapp/redux-actions';

export const fetchPrice = createAsyncActions('price/FETCH_PRICE');
export const fetchPriceRealTime = createAsyncActions('price/FETCH_PRICE_REAL_TIME');
