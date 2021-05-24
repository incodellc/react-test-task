import { StockService } from '../../services';

/**
 * Update interval type.
 */
export const UPDATE_INTERVAL = 'UPDATE_INTERVAL';

/**
 * Update stock fetch interval.
 * @param {number} ms
*/
export const updateInterval = (ms) => (dispatch) => {
    StockService.updateInterval(ms);
    return dispatch({ type: UPDATE_INTERVAL, payload: ms});
};

