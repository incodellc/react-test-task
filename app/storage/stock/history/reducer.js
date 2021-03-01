const addStockToHistory = (state, newStock) => {
    const { history } = state;

    const newHistory = [newStock, ...history];

    if (newHistory.length > 15) newHistory.pop();

    return {
        history: newHistory,
    };
};

export const stockHistory = (state = { history: [] }, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return addStockToHistory(state, action.payload);
        case 'CLEAR_DATA':
        case 'RESET_STOCK_HISTORY':
            return { history: [] };

        default:
            return state;
    }
};
