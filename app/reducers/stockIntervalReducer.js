import { SET_STOCK_INTERVAL } from '../actions';

export const stockIntervalReducer = (state = 5000, action) => {
    switch (action.type) {
        case SET_STOCK_INTERVAL:
            return action.payload;
        default:
            return state;
    }
};
