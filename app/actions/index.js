const connectionSocket = () => ({
    type: 'CONNECTION_SOCKET'
});

const connectionSocketSuccess = (ticker) => ({
    type: 'CONNECTION_SOCKET_SUCCESS',
    payload: ticker
});

const connectionSocketFailure = (error) => ({
    type: 'CONNECTION_SOCKET_FAILURE',
    payload: error
});

const setFetchInterval = (interval) => ({
    type: 'SET_FETCH_INTERVAL',
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
    // connectionSocket,
    // connectionSocketSuccess,
    // connectionSocketFailure,
    startFetching,
    setFetchInterval
};
