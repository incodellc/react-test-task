import {UPDATE_DATA_FROM_SERVICE} from '../actions/action-types';

const initialStateUpdDataFromService = {
    data: {},
};
const updateDataFromServiceReducer = (state = initialStateUpdDataFromService, action) => {
    switch(action.type) {
        case UPDATE_DATA_FROM_SERVICE:
            return Object.assign({}, state, {
                data: action.data,
            });
        default:
            return state;
    }
};
export default updateDataFromServiceReducer;
