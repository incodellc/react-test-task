export const UPDATE_TICKER = 'UPDATE_TICKER';

export const updateTicker = (data) => {
    return {
        type: UPDATE_TICKER,
        payload: data
    };
};
