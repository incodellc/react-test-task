import * as actions from '../actions/stockTickerActions';
import {saveCustomFetchInterval, changeData, saveTickerData } from './stockTickerActions';
import { mockStore } from '../../config/setupTest';

const bufferData = {
    change: '187.06',
    change_percent: '0.68',
    dividend: '0.55',
    exchange: 'NASDAQ',
    last_trade_time: '2020-09-27T15:41:50.000Z',
    price: '81.46',
    ticker: 'MNOV',
    yield: '0.25'
};

const mockData = '{"change":"187.06","change_percent":"0.68","dividend":"0.55","exchange":"NASDAQ","last_trade_time":"2020-09-27T15:41:50.000Z","price":"81.46","ticker":"MNOV","yield":"0.25"}';

const parsedData = {
    change: '187.06',
    changePercent: '0.68',
    dividend: '0.55',
    exchange: 'NASDAQ',
    lastTradeTime: '2020-09-27T15:41:50.000Z',
    price: '81.46',
    ticker: 'MNOV',
    yield: '0.25'
};

const store = mockStore({
    stockTicker: {
        bufferData,
        currentData: undefined,
        customFetchInterval: 5000,
    }
});

it('Dispatches the correct action and payload', () => {
    const expectedAction = {
        type: actions.SAVE_CUSTOM_FETCH_INTERVAL,
        payload: 8000
    };
    expect(store.dispatch(saveCustomFetchInterval(8))).toEqual(expectedAction);
});

it('Dispatches the correct action and payload', () => {
    const expectedAction = {
        type: actions.CHANGE_DATA,
        payload: bufferData
    };
    expect(store.dispatch(changeData())).toEqual(expectedAction);
});

it('Dispatches the correct action and payload', () => {
    const expectedAction = {
        type: actions.SAVE_TICKER_DATA,
        payload: parsedData
    };
    expect(store.dispatch(saveTickerData(mockData))).toEqual(expectedAction);
});
