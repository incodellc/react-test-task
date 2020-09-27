import * as ActionTypes from './actionTypes';
import { store } from '../index';

export const setTicker = (data) => {
    store.dispatch({
        type: ActionTypes.FETCH_TICKER,
        payload: data,
    });
};
