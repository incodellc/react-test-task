import {stockTicker} from './stockTicker';
import {currentTicker} from './currentTicker';
import {interval} from './interval';
import {types, tickers} from '../constants';
import {formatDate} from '../utils';

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
const ticker = tickers.NIKE;
const time = 4000;

describe('stockTicker reducer', () => {
    it('should return the initial state', () => {
        expect(stockTicker(undefined, [])).toEqual([]);
    });

    it('should handle SET_DATA', () => {
        expect(
            stockTicker([], {
                type: types.SET_DATA,
                payload: stock
            })
        ).toEqual([
            {
                ...stock,
                last_trade_time: formatDate('2021-02-17T19:05:07.000Z'),

            }
        ]);
    });
});

describe('currentTicker reducer', () => {
    it('should return the initial state', () => {
        expect(currentTicker(undefined, tickers.AAPL)).toEqual(tickers.AAPL);
    });

    it('should handle SET_TICKER', () => {
        expect(
            currentTicker('', {
                type: types.SET_TICKER,
                payload: ticker
            })
        ).toEqual(ticker);
    });
});

describe('interval reducer', () => {
    it('should return the initial state', () => {
        expect(interval(undefined, 5000)).toEqual(5000);
    });

    it('should handle SET_INTERVAL', () => {
        expect(
            interval(null, {
                type: types.SET_INTERVAL,
                payload: time
            })
        ).toEqual(time);
    });
});
