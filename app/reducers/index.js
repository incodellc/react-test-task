
const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATEDATA':
            return {data: action.data};
        default:
            return state;
    }
};

export default stockTicker;
