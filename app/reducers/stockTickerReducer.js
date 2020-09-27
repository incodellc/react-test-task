import {
    CHANGE_DATA,
    SAVE_CUSTOM_FETCH_INTERVAL,
    SAVE_TICKER_DATA
} from '../actions/stockTickerActions';

const initialState = {
    bufferData: {
        ticker: '',
        exchange: '',
        price: '',
        change: '',
        changePercent: '',
        lastTradeTime: '',
        fetchingTime: '',
        dividend: '',
    },
    currentData: undefined,
    customFetchInterval: 5000,
};

function  saveTicketData(state, action) {
    return {
        ...state,
        bufferData: action.payload,
    };
}

function changeData(state, action) {
    return {
        ...state,
        currentData: action.payload,
    };
}

function saveCustomTime(state, action) {
    return {
        ...state,
        customFetchInterval: action.payload,
    };
}

export const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TICKER_DATA:
            return saveTicketData(state, action);
        case SAVE_CUSTOM_FETCH_INTERVAL:
            return saveCustomTime(state, action);
        case CHANGE_DATA:
            return changeData(state, action);
        default:
            return state;
    }
};

export const getCustomFetchInterval = state => state.customFetchInterval;
export const getBufferData = state => state.bufferData;
export const getCurrentData = state => state.currentData;


