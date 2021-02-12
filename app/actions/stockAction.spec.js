import {setStock} from './stockAction'

describe('Test stock action creator', () => {
    it('Result must be function', () => {
        const result = setStock('AAPL');
        expect(typeof result).toBe('function');
    })

    it('Must call getState function', () => {
        const MockDispatch = jest.fn();
        const MockGetState = jest.fn().mockReturnValue({ stockInterval: 1000 });
        setStock('AAPL')(MockDispatch, MockGetState);
        expect(MockGetState.mock.calls.length).toBe(1);
    })
})