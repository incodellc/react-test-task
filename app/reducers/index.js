const stockTicker = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      const data = JSON.parse(action.payload);
      return {
        data,
        oldPrice: Object.keys(state).length === 0 ? '0' : state.data.price,
      };
    default:
      return state;
  }
};

export default stockTicker;
