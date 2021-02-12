import { SET_STOCK_INTERVAL } from './types';
import { setStockInterval } from '../services';

export const setNewInterval = (newInterval) => (dispatch) => {
    setStockInterval(newInterval);
    return dispatch({ type: SET_STOCK_INTERVAL, payload: newInterval });
};
