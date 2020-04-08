import {connect} from '../services';

const SET_DATA = 'SET_DATA';

const initialState = {
    prices: []
};

export const stockTickerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                prices: [action.data, ...state.prices]
            };
        default:
            return state;
    }
};

export const setData = (data) => ({type: SET_DATA, data});

export const loadData = () => (dispatch) => {
    connect('stockSymbol', (data) => {
        dispatch(setData(data));
    });
};

export const destroyData = () => (dispatch) => {
    connect('stockSymbol', (data) => {
        const typedData = {
            ...data,
            price: +data.price,
            id: (new Date()).getTime()
        };
        dispatch(setData(typedData));
    });
};


