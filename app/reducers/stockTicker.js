import { types } from '../constants';
import { formatDate } from '../utils';

const initialState = [];

export const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_DATA:
            const {payload} = action;
            const date = formatDate(payload.last_trade_time);
            return  [
                {
                    ...payload,
                    last_trade_time: date
                },
                ...state
            ];
        default:
            return state;
    }
};
