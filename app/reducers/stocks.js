import { SET_STOCK, SET_INTERVAL } from '../actions';
import { DEFAULT_REFRESH_INTERVAL } from '../constans';

export const stocksReducer = (state = null, action) => {
    switch (action.type) {
        case SET_STOCK:
            return action.payload;
        default:
            return state;
    }
};

export const intervalReducer = (state = DEFAULT_REFRESH_INTERVAL, action) => {
    switch (action.type) {
        case SET_INTERVAL:
            return action.payload;
        default:
            return state;
    }
};
