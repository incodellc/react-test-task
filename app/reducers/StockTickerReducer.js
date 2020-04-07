import { UPDATE_TICKER_ACTION } from '../actions/StockPriceAction';

const stockTickerReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_TICKER_ACTION:
            return {
                ...state,
                tickerData: action.payload
            };
        default:
            return state;
    }
};

export default stockTickerReducer;
