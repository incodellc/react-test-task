import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const initialState = {
    data: [],
    loading: false,
    error: null,
    stock: 'AAPL',
};

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: (state = initialState, action) => {
        switch (action.type) {
            case 'CREATE_CONNECTION':
                if(state.data.length <= 1) {
                    return {
                        ...state,
                        data: [...state.data, action.payload]
                    };
                }
                state.data.splice(0, 1);
                return {
                    ...state,
                    data: [...state.data, action.payload]
                };
            case 'BREAK_CONNECTION':
                return {
                    ...state,
                    data: []
                };
            case 'DELEY_TIME':
                return {
                    ...state
                };
            case 'STOCK_SYMBOL':
                return {
                    ...state,
                    stock: action.payload
                };
            case 'ERROR_CONNECTION':
                return {
                    ...state,
                    error: action.payload,
                };
            default:
                return state;
        }
    }
});

export default createRootReducer;
