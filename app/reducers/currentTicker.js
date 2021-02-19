import { types, tickers } from '../constants';

const initialState = tickers.AAPL;

export const currentTicker = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TICKER:
            const {payload} = action;
            return  payload;
        default:
            return state;
    }
};
