import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as ActionTypes from '../store/actionTypes';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: (state = {}, action) => {
        switch (action.type) {
            case ActionTypes.FETCH_TICKER:
                return { ...action.payload };
            default:
                return state;
        }
    }
});

export default createRootReducer;
