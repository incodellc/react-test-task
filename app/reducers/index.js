import { GET_DATA } from '../constants/ActionTypes';

const initialState = {
    data: {}
};

const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default stockTicker;
