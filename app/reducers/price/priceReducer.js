import { handleActions } from '@letapp/redux-actions';
import * as actions from './priceActions';

// set the initial random data for the chart
const InitChartData = [];
for ( let i = 1; i < 30; i++ ) {
    InitChartData.push(Math.round( Math.random() * 100 ));
}

const INITIAL_STATE = {
    latest: {
        price: {},
        chartData: InitChartData,
        isStartFetch: false,
        isloading: false,
        isError: false,
        error: null,
    },
};

// actions.fetchPrice - set the first state of the application
// actions.fetchPriceRealTime - changes the state of the application in every server call

export default handleActions({
    [actions.fetchPrice.start]: (state) => ({
        ...state,
        latest: {
            ...state.latest,
            isloading: true,
            error: null,
            isError: false,
        },
    }),
    [actions.fetchPrice.success]: (state, action) => ({
        ...state,
        latest: {
            ...state.latest,
            isloading: false,
            price: action.payload,
            chartData: [...state.latest.chartData, ...action.payload.price],
        }
    }),
    [actions.fetchPrice.error]: (state, action) => ({
        latest: {
            ...state.latest,
            isloading: false,
            error: action.payload,
            isError: true,
        },
    }),
    [actions.fetchPriceRealTime.start]: (state) => ({
        ...state,
        latest: {
            ...state.latest,
            isStartFetch: false,
            isloading: true,
            error: null,
            isError: false,
        },
    }),
    [actions.fetchPriceRealTime.success]: (state, action) => ({
        ...state,
        latest: {
            ...state.latest,
            isStartFetch: true,
            isloading: false,
            price: action.payload,
            chartData: [...state.latest.chartData, +action.payload.price],
        }
    }),
    [actions.fetchPriceRealTime.error]: (state, action) => ({
        ...state,
        latest: {
            ...state.latest,
            isloading: false,
            error: action.payload,
            isError: true,
        },
    }),
}, INITIAL_STATE);
