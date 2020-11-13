import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);


const store = mockStore({
    stockTicker: {
        payload: {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '181.07',
            change: '-23.43',
            change_percent: '0.65',
            last_trade_time: '2020-09-27T07:49:32.000Z',
            dividend: '0.09',
            yield: '1.22',
        }
    },
});

export default store;
