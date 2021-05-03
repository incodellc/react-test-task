import {connect} from './tickerService';

describe('Socket', () => {
    let socket;
    beforeEach(() => {
        socket = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '116.60',
            change: '-0.46',
            change_percent: '-0.39',
            last_trade_time: 'Oct 21, 4:00PM EDT',
            dividend: '0.57',
            yield: '1.96'
        };
    });
    describe('Socket connect', () => {
        it('Socket should connect', () => {
            connect();
            expect(socket.on).not.toBeNull;
        });
    });
});
