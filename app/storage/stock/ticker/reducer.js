const initialState = {
    ticker: '',
    exchange: '',
    price: 0,
    change: 0,
    change_percent: 0,
    last_trade_time: '',
    dividend: 0,
    yield: 0,
};

export const stockTicker = (state = { stock: initialState }, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, stock: action.payload };
        case 'CLEAR_DATA':
            return { stock: initialState };
        default:
            return state;
    }
};
