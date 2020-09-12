import { ADD_NEW_PRICE_TICKER } from './actions';

const initialState = {
    ticker: null,
    oldPrice: 0,
};

const stockTicker = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_NEW_PRICE_TICKER : {
            const newState = JSON.parse(JSON.stringify(state));
            newState.ticker = payload;
            newState.oldPrice = state.ticker ? state.ticker.price : 0;
            return  newState;
        }

        default:
            return state;
    }
};

export default stockTicker;
