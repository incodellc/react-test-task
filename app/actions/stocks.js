import { connect, setInterval as interval } from '../services/tickerService';
const action = (type) => (data) => ({ type: type, payload: data });

export const SET_STOCK = 'SET_STOCK';
export const setStock = (stockName) => (dispatch, getState) => {
    connect(stockName, getState().refreshInterval, (stock) =>
        dispatch(action(SET_STOCK)(stock))
    );
};

export const SET_INTERVAL = 'SET_INTERVAL';
export const setInterval = (refreshInterval) => (dispatch) => {
    interval(refreshInterval);
    return dispatch(action(SET_INTERVAL)(refreshInterval));
};
