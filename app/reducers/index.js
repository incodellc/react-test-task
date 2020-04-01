const initialState = {
    tickers: [],
    loading: true,
    error: null,
    interval: JSON.parse(localStorage.getItem('interval')) || 500
};
const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case 'CONNECTION_SOCKET':
            return {
                ...state,
                tickers: [],
                loading: true,
                error: null
            };
        case 'CONNECTION_SOCKET_SUCCESS':
            const newTickersArr = [...state.tickers, action.payload];
            return {
                ...state,
                tickers: newTickersArr,
                loading: false,
                error: null
            };
        case 'CONNECTION_SOCKET_FAILURE':
            return {
                ...state,
                tickers: [],
                loading: false,
                error: action.payload
            };
        case 'SET_FETCH_INTERVAL':
            return {
                ...state,
                interval: action.payload
            };
        default:
            return state;
    }
};

export default stockTicker;
