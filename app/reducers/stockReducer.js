import { SET_STOCK } from '../actions';

export const stockReducer = (state = [], action) => {
    switch (action.type) {
        case SET_STOCK:
            return [...state, action.payload];
        default:
            return state;
    }
};
