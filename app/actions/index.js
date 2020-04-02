import * as actionTypes from '../constatns/actionTypes';
const connectionSocket = () => ({
    type: actionTypes.CONNECTION_SOCKET
});

const connectionSocketSuccess = (ticker) => ({
    type: actionTypes.CONNECTION_SOCKET_SUCCESS,
    payload: ticker
});

const connectionSocketFailure = (error) => ({
    type: actionTypes.CONNECTION_SOCKET_FAILURE,
    payload: error
});

const setFetchInterval = (interval) => ({
    type: actionTypes.SET_FETCH_INTERVAL,
    payload: interval
});

const startFetching = (dispatch, connectFunc) => () => {
    dispatch(connectionSocket());
    try {
        connectFunc('AAPL', data => {
            dispatch(connectionSocketSuccess(data));
        });
    } catch (error) {
        dispatch(connectionSocketFailure(error));
    }
};

export {
    connectionSocket,
    connectionSocketSuccess,
    connectionSocketFailure,
    startFetching,
    setFetchInterval
};
