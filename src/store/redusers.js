import * as types from "./actionsTypes";

export const inititalState = {
    data: {},
    history: [],
    historyLength: 10,
    nasdaqList: [],
    nasdaqCurrent: {},
    connect: false
};

const redusers = (state = inititalState, action = {}) => {
    switch (action.type) {
        case types.PUT_DATA:

            const prevHistory = state.history.map(item => item);
            const oldPrice = state.data.price || null;
            const newPrice = action.payload.price;
            const difference = oldPrice ? (newPrice - oldPrice).toFixed(2) : false;

            if (prevHistory.length >= state.historyLength) prevHistory.splice(0, 1);

            prevHistory.push({
                ...action.payload,
                difference
            });
         
            return {
                ...state,
                data: action.payload,
                history: prevHistory
            };
            
        case types.SET_NASDAQ_LIST:

            return {
                ...state,
                nasdaqList: action.payload
            };
        case types.SET_NASDAQ_CURRENT:
            return {
                ...state,
                nasdaqCurrent: action.payload
            };
        case types.SET_CONNECT:
            return {
                ...state,
                connect: action.payload
            };
        case types.RESET_HISTORY:
            return {
                ...state,
                data: {},
                history: []
            };
        default:
            return state;
    }
};

export default redusers