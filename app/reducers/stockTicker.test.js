
import stockTicker from './stockTicker';
describe('stockTicker', () => {
    it('SET__DATA', () => {
        const action = { type: 'SET__DATA', payload: { testPayload: "testPayload" } }
        const result = stockTicker({}, action)
        expect(result).toEqual(action.payload)
    })
})