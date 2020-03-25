import {
    SERVICE_DATA_CHANGED_UP,
    SERVICE_DATA_CHANGED_DOWN
} from '../actions/action-types';

const initialState = {
    color: '#aaa',
};

const isServiceDataChangedReducer = (state = initialState, action) => {
    switch(action.type) {
        case SERVICE_DATA_CHANGED_UP:
            return Object.assign({}, state, {
                color: '#92E1A0',
            });
        case SERVICE_DATA_CHANGED_DOWN:
            return Object.assign({}, state, {
                color: '#E13168',
            });
        default:
            return state;
    }
};
export default isServiceDataChangedReducer;
