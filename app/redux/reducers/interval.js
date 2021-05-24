import { UPDATE_INTERVAL } from '../actions';

export const intervalReducer = (state = 1000, action) => {
    switch (action.type) {
        case UPDATE_INTERVAL:
            return action.payload;
        default:
            return state;
    }
};
