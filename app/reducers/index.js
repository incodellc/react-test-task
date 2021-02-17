import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { types } from '../constants';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: (state = [], action) => {
        switch (action.type) {
            case types.SET_DATA:
                return  [action.payload, ...state ];
            default:
                return state;
        }
    }
});

export default createRootReducer;
