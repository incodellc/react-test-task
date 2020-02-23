import {LOAD_DATA} from '../thunkCreators';

const stockTicker = (state = {dataArr: []}, action) => {
    switch (action.type) {
        case LOAD_DATA: return {...state, dataArr: [...state.dataArr, action.payload]};
        default:
            return state;
    }
};

export default stockTicker;
