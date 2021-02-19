import { types } from '../constants';

export const setStockTicker = (data) => {
    return {
        type: types.SET_DATA,
        payload: data
    };
};

export const setCurrentTicker = (data) => {
    return {
        type: types.SET_TICKER,
        payload: data
    };
};

export const setInterval = (data) => {
    return {
        type: types.SET_INTERVAL,
        payload: data
    };
};
