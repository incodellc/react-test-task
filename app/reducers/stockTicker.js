const initialState = {
    payload: {}
};

export default function stockTicker(state = initialState, action) {
    switch (action.type) {
        case 'SET__DATA':
            return {
                ...action.payload
            };
        default:
            return state;
    }
}


