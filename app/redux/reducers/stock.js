import { BIND_STOCK } from '../actions';
import '../../services/stock.types';

/**
 * @param {StockData[]} state
 * @param {{ action: string, payload: StockData }} action
 */
export const stockReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case BIND_STOCK:
            const otherStocks = state.filter(({ ticker }) => payload.ticker !== ticker);
            return [payload, ...otherStocks];
        default:
            return state;
    }
};
