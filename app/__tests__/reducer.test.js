import stockTicker, {initialState} from '../reducers/index';
import * as actionTypes from '../constatns/actionTypes';

describe('Reducer test', () => {
    it('CONNECTION_SOCKET, should change loading state', () => {
        const action = {
            type: actionTypes.CONNECTION_SOCKET
        };
        expect(stockTicker(initialState, action)).toEqual({
            ...initialState,
            loading: true
        });
    });
    it('CONNECTION_SOCKET_SUCCESS, should change loading state and set data in store tickers list', () => {
        const initialStateForNow = {
            tickers: [],
            loading: true,
            error: null,
            interval: JSON.parse(localStorage.getItem('interval')) || 500
        };
        const action = {
            type: actionTypes.CONNECTION_SOCKET_SUCCESS,
            payload: [1, 2, 3]
        };
        expect(stockTicker(initialStateForNow, action)).toEqual({
            ...initialStateForNow,
            loading: false,
            tickers: [...initialStateForNow.tickers, action.payload]
        });
    });
    it('CONNECTION_SOCKET_FAILURE, should change loading state and set error message in state error', () => {
        const initialStateForNow = {
            tickers: [],
            loading: true,
            error: null,
            interval: JSON.parse(localStorage.getItem('interval')) || 500
        };
        const action = {
            type: actionTypes.CONNECTION_SOCKET_FAILURE,
            payload: {error: 'Unknown error'}
        };
        expect(stockTicker(initialStateForNow, action)).toEqual({
            ...initialStateForNow,
            loading: false,
            error: action.payload
        });
    });
    it('should return the initial state', () => {
        expect(stockTicker(undefined, {})).toEqual(initialState);
    });
});
