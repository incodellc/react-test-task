import { types } from '../constants';

export const setStockTicker = (data) => {
    const date = new Date(data.last_trade_time);
    const formattedDate =
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return {
        type: types.SET_DATA,
        payload: {...data, last_trade_time: formattedDate}
    };
};
