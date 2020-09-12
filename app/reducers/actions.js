const namespace = 'PRICE_TICKER';
export const ADD_NEW_PRICE_TICKER = `${namespace}/ADD_NEW`;

export const newPrice = (data) => ({type: ADD_NEW_PRICE_TICKER, payload: JSON.parse(data)});
