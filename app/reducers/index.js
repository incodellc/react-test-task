const stockTicker = (
    state = {
        current: {},
        previous: {},
        updateInterval: null,
        lastUpdate: null
    },
    action
) => {
    switch (action.type) {
        case 'UPDATE_PRICE':
            const timeNow = Date.now();
            if ((timeNow - state.lastUpdate) / 1000 >= state.updateInterval) {
                return {
                    ...state,
                    current: action.payload,
                    previous: { ...state.current },
                    lastUpdate: timeNow
                };
            }
            return state;
        case 'SET_INTERVAL':
            return { ...state, updateInterval: action.payload };
        default:
            return state;
    }
};

export default stockTicker;
