export const UPDATE_TICKER_ACTION = 'ticker.update';

export const updateStockPriceAction = (tickerData) => {
    return {
        type: UPDATE_TICKER_ACTION,
        payload: tickerData
    };
};
