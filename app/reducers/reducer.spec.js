import {stockTicker} from './stockTickerReducer';
import * as actions from '../actions/stockTickerActions';

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

const currentData = {
    change: '187.06',
    change_percent: '0.68',
    dividend: '0.55',
    exchange: 'NASDAQ',
    last_trade_time: '2020-09-27T15:41:50.000Z',
    price: '81.46',
    ticker: 'MNOV',
    yield: '0.25'
};

const customFetchInterval = 8;

it('should return the initial state', () => {
    expect(stockTicker({}, {})).toEqual({});
});

it('should handle SAVE_TICKER_DATA', () => {
    const successAction = {
        type: actions.SAVE_TICKER_DATA,
        payload: bufferData
    };
    expect(stockTicker({}, successAction)).toEqual({bufferData});
});

it('should handle SAVE_CUSTOM_FETCH_INTERVAL', () => {
    const successAction = {
        type: actions.SAVE_CUSTOM_FETCH_INTERVAL,
        payload: customFetchInterval,
    };
    expect(stockTicker({}, successAction)).toEqual({customFetchInterval: customFetchInterval});
});

it('should handle CHANGE_DATA', () => {
    const successAction = {
        type: actions.CHANGE_DATA,
        payload: bufferData,
    };
    expect(stockTicker({}, successAction)).toEqual({currentData});
});
