import {setData, stockTickerReducer} from './stockReducer';
import expect from 'expect';




describe('StockTickerReducer tests', () => {

    let testData = {
        ticker: 'stockSymbol',
        exchange: 'NASDAQ',
        price: '152.82',
        change: '139.52',
        change_percent: '0.77',
        last_trade_time: '2020-03-28T14:59:17.000Z',
        dividend: '0.92',
        yield: '0.18',
        id: 2
    };

    it('new data should be added to the start of array', () => {
        const newState = stockTickerReducer({
            prices: {id: 1}
        }, setData(testData));

        expect(newState.prices[0].id).toEqual(2);
    });

    it('data should be added to empty default array', () => {
        const newState = stockTickerReducer(undefined, setData(testData));

        expect(newState.prices.length).toEqual(1);
    });
});
