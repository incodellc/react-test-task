import stockTicker from './stockTicker';
import store from '../mockStore';


const actualState = store.getState();
const state = actualState.stockTicker.payload;

const suitableAction = {
    type: 'SET__DATA',
    payload: state
};

const unSuitableAction = {
    type: 'SET__ERR',
    payload: state
};

describe('Reduser testing', () => {
    it('Test stockTicker with wright action', () => {
        expect(stockTicker({}, suitableAction)).toEqual({payload: state});
    });

    it('Test stockTicker with wrong action', () => {
        expect(stockTicker({}, unSuitableAction)).toEqual({});
    });
});
