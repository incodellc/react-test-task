import {
    tickerState,
    CONNECT_ACTION_TYPE,
    DISCONNECT_ACTION_TYPE,
    SET_DISPLAY_COLUMNS_ACTION_TYPE,
} from '../system/defaultStates';

export const tickerReducer = (
    state = tickerState,
    { type, newData, ticker }
) => {
    switch (type) {
        case CONNECT_ACTION_TYPE:
            if (state.data.length >= state.displayColumns) {
                return {
                    ...state,
                    data: [...state.data.slice(1), newData],
                    tickerName: ticker,
                    errorChecker: false,
                };
            }
            return {
                ...state,
                data: [...state.data, newData],
                tickerName: ticker,
            };
        case SET_DISPLAY_COLUMNS_ACTION_TYPE:
            const elsToSlice =
                state.data.length >= newData ? state.data.length - newData : 0;
            return {
                ...state,
                displayColumns: newData,
                data: [...state.data.slice(elsToSlice)],
            };
        case DISCONNECT_ACTION_TYPE:
            return {
                ...state,
                data: [],
                errorChecker: true,
            };
        default:
            return state;
    }
};
