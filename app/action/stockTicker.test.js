
import { setStockTicker } from './stockTicker';
describe('stockTickerAction', () => {
    it('should return type and payload', () => {
        const payload = { testPayload: 'testPayload' };
        const result = setStockTicker(payload);
        expect(result).toEqual({ type: 'SET__DATA', payload });
    });
});
