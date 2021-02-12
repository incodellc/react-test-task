import {setNewInterval} from './stockIntervalAction'

describe('Test stock interval action creator', () => {
    it('Result must be function', () => {
        const result = setNewInterval(5000);
        expect(typeof result).toBe('function');
    })
})