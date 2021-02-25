import { updateTicker, setInterval } from './tickers';

jest.mock('../services/tickerService', () => ({
    setDelay: jest.fn()
}));

describe('actions', () => {
    it('updateTicker test', () => {
        const payload = { testPayload: 'testPayload' };
        const result = updateTicker(payload);
        expect(result).toEqual({ type: 'UPDATE_TICKER', payload });
    });

    it('updateTicker test', () => {
        const payload = { testPayload: 'testPayload' };
        const result = setInterval(payload);
        expect(result).toEqual({ type: 'SET_INTERVAL', payload });
    });
});
