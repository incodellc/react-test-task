import { omit } from 'lodash';
import { getCurrentData, getBufferData } from '../selectors/selectors';

export const CHANGE_DATA = '@stockTicker/CHANGE_DATA';

export const changeData = () => (dispatch, getState) => {
    const state = getState();
    const bufferData = getBufferData(state);
    return dispatch({
        type: CHANGE_DATA,
        payload: bufferData,
    });
};

export const SAVE_TICKER_DATA = '@stockTicker/SAVE_TICKER_DATA';

export const saveTickerData = data => (dispatch, getState) => {
    const state = getState();
    const currentData = getCurrentData(state);
    let parsedData;
    if(data) {
        try {
            parsedData = JSON.parse(data);
            const payloadData = {...omit(parsedData, ['change_percent', 'last_trade_time']), changePercent: parsedData.change_percent, lastTradeTime: parsedData.last_trade_time};
            if (!currentData) {
                dispatch({
                    type: CHANGE_DATA,
                    payload: payloadData,
                });
            }

            return dispatch({
                type: SAVE_TICKER_DATA,
                payload: payloadData,
            });
        } catch(e) {
            console.log(e);
        }
    }
};

export const SAVE_CUSTOM_FETCH_INTERVAL = '@stockTicker/SAVE_CUSTOM_FETCH_INTERVAL';

export const saveCustomFetchInterval = time => dispatch => {
    return dispatch({
        type: SAVE_CUSTOM_FETCH_INTERVAL,
        payload: time * 1000,
    });
};


