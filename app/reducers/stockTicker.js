import { UPDATE_TICKER } from './actions';

const initialState = {
    tickers: []
};

export default function stockTicker(state = initialState, { type, payload }) {
    switch (type) {
        case UPDATE_TICKER:
            return {
                tickers: [
                    ...state.tickers,
                    payload
                ]
            };
        default:
            return state;
    }
}
