export const UPDATE_STOCK_TICKER = 'UPDATE_STOCK_TICKER';

const initialState = {
    ticker: []
};

const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STOCK_TICKER:
            return {...state, ticker: action.payload};
        default:
            return state;
    }
};

export default stockTicker;
