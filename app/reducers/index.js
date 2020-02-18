import {UPDATE_STOCK_TICKER} from './types';

const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_STOCK_TICKER:
            return state;
        default:
            return state;
    }
};

export default stockTicker;
