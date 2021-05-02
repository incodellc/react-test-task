import {setIntervalTime} from '../../../services';

export const SET_INTERVAL = 'SET_INTERVAL';

const initialState = 5000;

const stockUpdateTime = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_INTERVAL:
            return payload;
        default:
            return state;
    }
};

export const setInterval = (data) => {
    setIntervalTime(data);
    return {
        type: SET_INTERVAL,
        payload: data
    };
};

export default stockUpdateTime;
