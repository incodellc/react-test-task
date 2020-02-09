import * as types from "./actionsTypes";

export const putData = data => {
    return {
        type: types.PUT_DATA,
        payload: data
    };
};

export const setNasdaqList = data => {
    return {
        type: types.SET_NASDAQ_LIST,
        payload: data
    };
};

export const setNasdaqCurrent = data => {
    return {
        type: types.SET_NASDAQ_CURRENT,
        payload: data
    };
};

export const setConnect = data => {
    return {
        type: types.SET_CONNECT,
        payload: data
    };
};

export const resetHistory = data => {
    return {
        type: types.RESET_HISTORY,
        payload: data
    };
};
