import { RECEIVE_DATA } from '../actions';

const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                prevPrice: state.ticker ? state.ticker.price : undefined,
                ticker: action.payload
            };

        default:
            return state;
    }
};

export default stockTicker;
