import { setDelay } from '../services/tickerService';

export const UPDATE_TICKER = 'UPDATE_TICKER';
export const SET_INTERVAL = 'SET_INTERVAL';

export const updateTicker = (data) => {
    return {
        type: UPDATE_TICKER,
        payload: data
    };
};

export const setInterval = (data) => {
    setDelay(data);
    return {
        type: SET_INTERVAL,
        payload: data
    };
};
