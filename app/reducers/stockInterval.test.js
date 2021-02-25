import stockInterval from './stockInterval';

const initialState = 5000;

describe('stockInterval test', () => {
    it('SET_INTERVAL action test', () => {
        const action = { type: 'SET_INTERVAL', payload: 5000 };
        const result = stockInterval(initialState, action);
        expect(result).toEqual(5000);
    });
});
