import {setStockTicker, setCurrentTicker, setInterval} from './index';
import { types } from '../constants';

describe('action setStockTicker', () => {
    it('should create an action to add stock sticker data', () => {
        const stock = {
            ticker: 'APPLE',
            exchange: 'NASDAQ',
            price: '174.15',
            change: '-73.70',
            change_percent: '0.55',
            last_trade_time: '2021-02-17T19:05:07.000Z',
            dividend: '0.75',
            yield: '0.54'
        };
        const expectedAction = {
            type: types.SET_DATA,
            payload: stock
        };
        expect(setStockTicker(stock)).toEqual(expectedAction);
    });
});
describe('actions', () => {
    it('should create an action to set current ticker', () => {
        const ticker = 'BA';
        const expectedAction = {
            type: types.SET_TICKER,
            payload: ticker
        };
        expect(setCurrentTicker(ticker)).toEqual(expectedAction);
    });
});
describe('actions', () => {
    it('should create an action to set interval', () => {
        const interval = 3000;
        const expectedAction = {
            type: types.SET_INTERVAL,
            payload: interval
        };
        expect(setInterval(interval)).toEqual(expectedAction);
    });
});
