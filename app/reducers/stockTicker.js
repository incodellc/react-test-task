import {FETCH_TICKERS} from '../actions/types';

const initialState = {
    ticker: '',
    exchange: '',
    price: '0',
    change: '0',
    change_percent: '0',
    last_trade_time: '',
    dividend: '0',
    yield: '0'
};

export const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKERS:
            return {
                data: {
                    ...state.data,
                    ...JSON.parse(action.payload)
                }
            };

        default:
            return state;
    }
};
