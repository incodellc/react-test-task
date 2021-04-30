import { createConnection, breakConnection, deleyTimeChange } from './index';
import axios from 'axios';
import jest from 'jest';

// jest.mock('axios');

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

// const ticker = 'AAPL';
// const time = 2000;

describe('create connection action', () => {
    it('should add stock to store', () => {
        const expectedAction = {
            type: 'CREATE_CONNECTION', payload: stock
        };

        expect(createConnection(stock)).toEqual(expectedAction);
    });
});

describe('Break connection action', () => {
    it('Should clean stock history', () => {
        const expectedAction = {
            type: 'BREAK_CONNECTION', payload: {}
        };

        expect(breakConnection()).toEqual(expectedAction);
    });
});

describe('change delay time', () => {
    it('should update deley time', () => {
        deleyTimeChange(5000).then((result) => {
            expect(result.status).toEqual(200);
        });
    });
});
