import { FETCH_TICKERS } from './types';

export function getTicker(tickerData) {
    return {
        type: FETCH_TICKERS,
        payload: tickerData
    };
}
