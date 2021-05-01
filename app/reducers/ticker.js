const initialState = {
    data: [],
    loading: false,
    error: null,
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
        default:
            return state;
    }
};
