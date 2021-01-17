import {stockTicker as stockTickerReducer} from '../reducers/stockTicker';
import { getTicker } from '../actions';
import { expect } from 'chai';

it('new sticker should appears', () => {
    // 1. test data
    const tickerData = {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: '117.33',
        change: '18.80',
        change_percent: '0.68',
        last_trade_time: '2021-01-16T08:56:33.000Z',
        dividend: '0.26',
        yield: '1.39'
    };
    const ticker = getTicker(JSON.stringify(tickerData));

    // 2.action
    const newState = stockTickerReducer(tickerData, ticker);
    const newStateKeys = Object.keys(newState.data);

    // 3. expectation
    expect(newStateKeys.length).to.equal(8);
});
