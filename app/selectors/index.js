export const getTickerData = state => {
    return state.ticker;
};

export const getPrevPrice = state => {
    return state.prevPrice;
};

export const getCurrPrice = state => {
    return state.ticker && state.ticker.price;
};

export const getPriceChanging = state => {
    const prev = getPrevPrice(state);
    const curr = getCurrPrice(state);

    if (curr > prev) {
        return 'positive';
    } else if (curr < prev) {
        return 'negative';
    } else if (curr === prev) {
        return 'neutral';
    }
};
