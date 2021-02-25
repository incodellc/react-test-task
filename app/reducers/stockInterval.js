import { SET_INTERVAL } from '../actions/tickers';

const initialState = 5000;

export default function stockInterval(state = initialState, {type, payload}) {
    switch (type) {
        case SET_INTERVAL:
            return payload;
        default:
            return state;
    }
}
