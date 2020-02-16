import connect from './tickerService';
describe('socket', () => {
    describe('connect(): ', () => {
        let socket;
        beforeEach(() => {
            socket = {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '106.98',
                change: '125.45',
                change_percent: '0.69',
                last_trade_time: '2020-02-16T17:18:52.000Z',
                dividend: '0.37',
                yield: '0.24'
            };
        });
        it('should conected', () => {
            connect();
            expect(socket.on).not.toBeNull();
        });
    });
});
