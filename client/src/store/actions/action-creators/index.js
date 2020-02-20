import actionTypes from '../action-types';
import { tickerService } from '../../../services';
import { tickers } from '../../../utils';

export const streamServerConnect = () => {
    return {
        type: actionTypes.STREAM_SERVER_CONNECT
    };
};

export const streamServerDisconnect = () => {
    return {
        type: actionTypes.STREAM_SERVER_DISCONNECT
    };
};

export const updateQuotes = (data) => {
    return {
        type: actionTypes.UPDATE_QUOTES,
        data
    };
};

export const connectToStreamServer = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.CONNECTION_INIT
        });
        tickerService(
            tickers, 
            () => dispatch(streamServerConnect()), 
            (data) => dispatch(updateQuotes(data)),
            () => dispatch(streamServerDisconnect())
        );
    };
};

export const toggleTicker = (tickerId) => {
    return {
        type: actionTypes.TOGGLE_TICKER,
        tickerId
    };
};

export const applySortParams = (target) => {
    return {
        type: actionTypes.APPLY_SORT_PARAMS,
        target
    };
};


export const setHistoryLength = (lengthValue) => {
    return {
        type: actionTypes.SET_HISTORY_LENGTH,
        lengthValue
    };
};

export const resetHistory = () => {
    return {
        type: actionTypes.RESET_HISTORY
    };
};

export const resetSortParams = () => {
    return {
        type: actionTypes.RESET_SORT_PARAMS
    };
};