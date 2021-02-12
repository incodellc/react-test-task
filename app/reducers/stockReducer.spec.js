import { stockReducer } from './stockReducer';
import {SET_STOCK} from '../actions'

const action = {
    type: SET_STOCK,
    payload: {
        ticker:"AAPL",
        exchange:"NASDAQ",
        price:"130.02",
        change:"35.44",
        change_percent:"0.53",
        last_trade_time:"2021-02-11T07:29:59.000Z",
        dividend:"0.89",
        yield:"1.70",
    }
}

describe('Test stock reducer', () => {
    it('Result must be equal to action.payload', () => {
        const result = stockReducer(undefined, action);
        expect(result).toEqual([action.payload]);
    })
})