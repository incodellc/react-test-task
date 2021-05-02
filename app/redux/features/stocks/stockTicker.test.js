import {getPreviousPrice, getStockValueColor, updateObject} from './stockTicker';

test('Get stock color indication based on price', () => {
    expect(getStockValueColor(10, 0)).toBe('red');
    expect(getStockValueColor(0, 10)).toBe('green');
});

test('Get previous stock price', () => {
    let state = {
        stocks: {}
    };

    const payload = {
        ticker: 'AAPL',
    };
    // undefined case
    expect(getPreviousPrice(state, 'AAPL')).toBe(0);

    state = {
        stocks: {
            AAPL: {
                price: 20,
            }
        }
    };
    expect(getPreviousPrice(state, payload)).toBe(20);
});

test('Update state object', () => {
    const payload = {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: '270.77',
        change: '120.59',
        changePercent: '0.75',
        lastTradeTime: '2021-05-02T05:01:57.000Z',
        dividend: '0.17',
        yield: '0.10',
    };

    const color = 'green';

    const state = {
        stocks: {
            AAPL: {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '200.77',
                change: '10.59',
                changePercent: '0.05',
                lastTradeTime: '2021-05-02T05:01:57.000Z',
                dividend: '0.17',
                yield: '0.10',
            }
        }
    };

    const expectedState = {
        stocks: {
            AAPL: {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '270.77',
                change: '120.59',
                changePercent: '0.75',
                lastTradeTime: '2021-05-02T05:01:57.000Z',
                dividend: '0.17',
                yield: '0.10',
                color: 'green',
            }
        }
    };

    expect(updateObject(state, payload, color)).toStrictEqual(expectedState);
});
