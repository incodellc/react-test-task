const initialState = {
    data: [],
    loading: false,
    error: null,
    tickSymbol: 'AAPL',
    deleyTime: 5000,
};

export const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CONNECTION':
            if(state.data.length <= 1) {
                return {
                    ...state,
                    data: [...state.data, action.payload]
                };
            }
            state.data.splice(0, 1);
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case 'BREAK_CONNECTION':
            return {
                ...state,
                data: []
            };
        case 'ERROR_CONNECTION':
            return {
                ...state,
                data: [],
                error: action.payload,
            };
        case 'CHANGE_TICK_SYMBOL':
            return {
                ...state,
                data: [],
                tickSymbol: action.payload
            };
        case 'CHANGE_DELEY_TIME':
            return {
                ...state,
                data: [],
                deleyTime: action.payload
            };
        default:
            return state;
    }
};
