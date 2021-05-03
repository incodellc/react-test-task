import { stockTicker } from './ticker';

const stock = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '116.60',
    change: '-0.46',
    change_percent: '-0.39',
    last_trade_time: 'Oct 21, 4:00PM EDT',
    dividend: '0.57',
    yield: '1.96'
};

const dummyState = {
    data: [
        {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '116.60',
            change: '-0.46',
            change_percent: '-0.39',
            last_trade_time: 'Oct 21, 4:00PM EDT',
            dividend: '0.57',
            yield: '1.96'
        }
    ],
    loading: false,
    error: null,
    deleyTime: 5000,
    tickSymbol: 'AAPL',
};

const initialState = {
    data: [],
    loading: false,
    error: null,
    deleyTime: 5000,
    tickSymbol: 'AAPL',
};

describe('Stock ticker reducer', () => {
    it('return initial state', () => {
        expect(stockTicker(undefined, [])).toEqual(initialState);
    });
    it('handle CREATE_CONNECTION', () => {
        expect(stockTicker(initialState, { type: 'CREATE_CONNECTION', payload: stock })).toEqual(dummyState);
    });
    it('handle BREAK_CONNECTION', () => {
        expect(stockTicker(dummyState, {type: 'BREAK_CONNECTION', payload: {}})).toEqual(initialState);
    });
    it('handle ERROR', () => {
        expect(stockTicker(dummyState, { type: 'ERROR_CONNECTION', payload: '500 Error'})).toEqual({...initialState, error: '500 Error'});
    });
});

