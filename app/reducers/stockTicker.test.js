import stockTicker from './stockTicker';

const initialState = {
    tickers: []
};

describe('stockTicker test', () => {
    it('UPDATE_TICKER action test', () => {
        const action = { type: 'UPDATE_TICKER', payload: { testPayload: 'testPayload' } };
        const result = stockTicker(initialState, action);
        expect(result.tickers).toEqual([action.payload]);
    });
});
