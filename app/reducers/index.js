const stockTicker = (state = {}, action = {type: ''}) => {
    switch (action.type) {
        case 'UPDATEDATA':
            const data = JSON.parse(action.data);
            return {
                data,
                oldPrice: Object.keys(state).length === 0  ? '0' : state.data.price,
            };
        default:
            return state;
    }
};

export default stockTicker;
