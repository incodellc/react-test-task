const init = {
    data: null,
    oldPrice: '0'
};

const stockTicker = (state = init, action) => {
    switch (action.type) {
        case 'UPDATEDATA':
            const newData = Object.entries(JSON.parse(action.data));
            return {
                data: newData,
                oldPrice: state.data ? state.data[2][1] : '0',
            };
        default:
            return state;
    }
};

export default stockTicker;
