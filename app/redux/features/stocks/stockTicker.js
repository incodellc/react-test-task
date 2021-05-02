const UPDATE_STOCK = 'UPDATE_STOCK';

const initialState = {
    stocks: {},
};

export const getStockValueColor = (previousPrice, currentPrice) => {
    if (currentPrice < previousPrice) {
        return 'red';
    } else if (currentPrice > previousPrice) {
        return 'green';
    }
};

export const getPreviousPrice = (state, payload) => {
    let previousPrice;
    if (state.stocks[payload.ticker] !== undefined && state.stocks[payload.ticker].hasOwnProperty('price')) {
        previousPrice = state.stocks[payload.ticker].price;
    } else {
        previousPrice = 0;
    }
    return previousPrice;
};

export const updateObject = (state, payload, color) => {
    return {
        stocks: {
            ...state.stocks,
            [payload.ticker]: {
                ...payload,
                color
            }
        }
    };
};

const updateStock = (state, payload) => {
    const previousPrice = getPreviousPrice(state, payload);
    const currentPrice = payload.price;
    const color = getStockValueColor(previousPrice, currentPrice);
    return updateObject(state, payload, color);
};

const stockTicker = (state = initialState, {type, payload}) => {
    switch (type) {
        case UPDATE_STOCK:
            return updateStock(state, payload);
        default:
            return state;
    }
};

export const updateTicker = (data) => {
    return {
        type: UPDATE_STOCK,
        payload: data
    };
};

export default stockTicker;
