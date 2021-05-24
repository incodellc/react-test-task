import { StockService } from '../../services';

/**
 * Binding stock type.
 */
export const BIND_STOCK = 'BIND_STOCK';

/**
 * Bind to stock fetching.
 * @param {string} name
 */
export const bindStock = (name) => (dispatch, getState) => {
    StockService.fetchStock(name, getState().interval, (payload) =>{
        dispatch({ type: BIND_STOCK, payload });
    });
};
