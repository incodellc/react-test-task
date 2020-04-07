import { GET_NEW_DATA } from '../actions/actions';

const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case GET_NEW_DATA: {
            const newTickerData = [
                {
                    ...action.payload,
                    upward: state.prevPrice < action.payload.price,
                    last_trade_time: action.payload.last_trade_time.replace(/T|(\.000Z)/g, ' ').trim(),
                },
                ...state.tickerData,
            ];

            if (newTickerData.length > 50) {
                newTickerData.pop();
            }

            return {
                ...state,
                tickerData: newTickerData,
                prevPrice: +action.payload.price,
            };
        }
        default:
            return state;
    }
};

export default stockTicker;
