import { stockIntervalReducer } from './stockIntervalReducer';
import {SET_STOCK_INTERVAL} from '../actions'

const action = {
    type: SET_STOCK_INTERVAL,
    payload: 1000
}

describe('Test stock interval reducer', () => {
    it('Result must be equal to action.payload', () => {
        const result = stockIntervalReducer(null, action);
        expect(result).toBe(action.payload);
    })
})