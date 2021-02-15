import {
    fetchState,
    SET_FETCH_INTERVAL_ACTION_TYPE,
} from '../system/defaultStates';

export const intervalReducer = (state = fetchState, { type, newData }) => {
    switch (type) {
        case SET_FETCH_INTERVAL_ACTION_TYPE:
            return {
                ...state,
                interval: newData,
            };
        default:
            return state;
    }
};
