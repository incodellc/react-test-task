import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: (state = {}, action) => {
        switch (action.type) {
            case 'SET_DATA': return JSON.parse(action.payload);
            default: return state;
        }
    }
});

export default createRootReducer;
