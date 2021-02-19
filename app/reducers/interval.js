import { types } from '../constants';

const initialState = 5000;

export const interval = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_INTERVAL:
            const {payload} = action;
            return payload;
        default:
            return state;
    }
};
