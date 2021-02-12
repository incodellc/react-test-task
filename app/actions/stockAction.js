import { SET_STOCK } from './types';
import { connect } from '../services';

export const setStock = (stockSymbol) => (dispatch, getState) =>
    connect(stockSymbol, getState().stockInterval, (data) =>
        dispatch({ type: SET_STOCK, payload: data })
    );
