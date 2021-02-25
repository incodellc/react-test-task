import { updateTicker } from './actions';

describe('actions', () => {
    it('updateTicker test', () => {
        const payload = { testPayload: 'testPayload' };
        const result = updateTicker(payload);
        expect(result).toEqual({ type: 'UPDATE_TICKER', payload });
    });
});
