import { sortByKey, quotesExample } from '../';

describe('Check sortByKey utility', () => {
    const sortParams = {
        target: null,
        isDate: false,
        reverse: false
    };

    it('Given array of objects should be sorted asc/desc if given key value is NUMBER', () => {
        sortParams.target = 'price';
        expect(+sortByKey(quotesExample, sortParams)[0].price).toEqual(Math.min(...quotesExample.map(elem => +elem.price)));
        expect(+sortByKey(quotesExample, sortParams)[quotesExample.length - 1].price).toEqual(Math.max(...quotesExample.map(quote => +quote.price)));
        sortParams.reverse = true
        expect(+sortByKey(quotesExample, sortParams)[0].price).toEqual(Math.max(...quotesExample.map(elem => +elem.price)));
        expect(+sortByKey(quotesExample, sortParams)[quotesExample.length - 1].price).toEqual(Math.min(...quotesExample.map(quote => +quote.price)));
    });

    it('Given array of objects should be sorted asc/desc if given key value is STRING', () => {
        sortParams.target = 'ticker';
        sortParams.reverse = false;
        expect(sortByKey(quotesExample, sortParams)[0].ticker).toEqual('AAPL');
        expect(sortByKey(quotesExample, sortParams)[quotesExample.length - 1].ticker).toEqual('TSLA');
        sortParams.reverse = true
        expect(sortByKey(quotesExample, sortParams)[0].ticker).toEqual('TSLA');
        expect(sortByKey(quotesExample, sortParams)[quotesExample.length - 1].ticker).toEqual('AAPL');
    });

    it('Given array of objects should be sorted asc/desc if given key value is DATE', () => {
        sortParams.target = 'last_trade_time';
        sortParams.reverse = false;
        sortParams.isDate = true;
        expect(sortByKey(quotesExample, sortParams)[0].ticker).toEqual('AAPL');
        expect(sortByKey(quotesExample, sortParams)[quotesExample.length - 1].ticker).toEqual('DISCK');
        sortParams.reverse = true
        expect(sortByKey(quotesExample, sortParams)[0].ticker).toEqual('DISCK');
        expect(sortByKey(quotesExample, sortParams)[quotesExample.length - 1].ticker).toEqual('AAPL');
    });
});