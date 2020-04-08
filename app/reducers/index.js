import {connect} from '../services';

export const SET_DATA = 'SET_DATA';
const initialState = {
    prices: [
        // {
        //     'ticker': '',
        //     'exchange': 'NASDAQ',
        //     'price': '191.25',
        //     'change': '174.65',
        //     'change_percent': '0.61',
        //     'last_trade_time': '2020-04-01T10:58:44.000Z',
        //     'dividend': '0.86',
        //     'yield': '1.91'
        // }
    ]
};
const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return{
                ...state, prices: [action.data, ...state.prices]
            };

        default:
            return state;
    }
};
const setData = (data) => ({type: SET_DATA, data});

export const loadData = () => (dispatch) => {
    connect('stockSymbol', (data)=> {
        dispatch(setData(data));
    });
};
export const destroyData = () => (dispatch) => {
    connect('stockSymbol', (data)=> {
        const typedData = {
            ...data,
            prices: +data.prices
        };
        dispatch(setData(typedData));
    });
};
export default stockTicker;
