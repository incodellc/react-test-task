import { types } from '../constants';

export const setStockTicker = (data) => ({
    type: types.SET_DATA,
    payload: data
});
