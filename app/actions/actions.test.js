import setDataAction from './setDataAction';
import store from '../mockStore';

const actualState = store.getState();
const state = actualState.stockTicker.payload;

it('Return the correct action and payload', () => {
    const expectedAction = {
        type: 'SET__DATA',
        payload: state
    };
    expect(setDataAction(state)).toEqual(expectedAction);
});

