import {
    connectionSocket,
    connectionSocketSuccess,
    connectionSocketFailure,
    setFetchInterval
} from '../actions';

describe('Actions tests', () => {
    it('connectionSocket(), should create action for start fetching', () => {
        expect(connectionSocket()).toEqual({
            type: 'CONNECTION_SOCKET'
        });
    });
    it('connectionSocketSuccess(), should attach tickers data', () => {
        const data = [1, 2, 3];
        expect(connectionSocketSuccess(data)).toEqual({
            type: 'CONNECTION_SOCKET_SUCCESS',
            payload: data
        });
    });
    it('connectionSocketFailure(), should attach error message', () => {
        const err = {error: 'Something wrong'};
        expect(connectionSocketFailure(err)).toEqual({
            type: 'CONNECTION_SOCKET_FAILURE',
            payload: err
        });
    });
    it('setFetchInterval(), should attach fetching interval ', () => {
        const interval = 1500;
        expect(setFetchInterval(interval)).toEqual({
            type: 'SET_FETCH_INTERVAL',
            payload: interval
        });
    });
});
