import stockTicker from './index';
import { GET_NEW_DATA } from '../actions/actions';

describe('Reducer', () => {
    it('should return the initial state', () => {
        expect(stockTicker(undefined, {})).toEqual({});
    });

    it('should handle GET_NEW_DATA', () => {
        expect(
            stockTicker(
                {
                    tickerData: [],
                    prevPrice: 0,
                },
                {
                    type: GET_NEW_DATA,
                    payload: {
                        ticker: 'AAPL',
                        exchange: 'NASDAQ',
                        price: '214.09',
                        change: '70.55',
                        change_percent: '0.13',
                        last_trade_time: '2020-04-05T23:08:58.000Z',
                        dividend: '0.39',
                        yield: '0.91'
                    }
                }
            )
        ).toEqual({
            tickerData: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '214.09',
                    change: '70.55',
                    change_percent: '0.13',
                    last_trade_time: '2020-04-05 23:08:58',
                    dividend: '0.39',
                    yield: '0.91',
                    upward: true,
                },
            ],
            prevPrice: 214.09,
        });
    });
});
