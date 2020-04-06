import { getNewData } from '../actions/actions';
import { GET_NEW_DATA } from '../actions/actions';

describe('getNewData', () => {
    it('should create an action to get data', () => {
        const data = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '220.92',
            change: '177.74',
            change_percent: '0.38',
            last_trade_time: '2020-04-05T19:40:18.000Z',
            dividend: '0.18',
            yield: '1.02'
        };
        const expectedAction = {
            type: GET_NEW_DATA,
            payload: data,
        };

        expect(getNewData(data)).toEqual(expectedAction);
    });
});
