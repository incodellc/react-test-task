/* eslint-disable no-unused-vars */
import React from 'react';
import '../../app/styles/application.scss';
import Enzyme, {shallow, mount, render} from 'enzyme';
// import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TikcerData, {ConnectedTickerData} from '../../app/components/TickerData';
import App from '../../app/components/App';
Enzyme.configure({adapter: new Adapter() });
// Middleware
const thunk = ({dispatch, getState}) => (next) => (action) => {
    if(typeof action === 'function') {
        return action(dispatch, getState);
    }

    return next(action);
};

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn(),
    };
    const next = jest.fn();
    const invoke = (action) => thunk(store)(next)(action);

    return {store, next, invoke};
};
describe('component TICKERDATA with connect()', () => {
    it('passses through non-func action', () => {
        const {next, invoke} = create();
        const action = { type: 'TEST' };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('calls the function', () => {
        const {invoke} = create();
        const fn = jest.fn();
        invoke(fn);
        expect(fn).toHaveBeenCalled();
    });

    it('passes dispatch and getState', () => {
        const {store, invoke} = create();
        invoke((dispatch, getState) => {
            dispatch('TEST DISPATCH');
            getState();
        });
        expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
        expect(store.getState).toHaveBeenCalled();
    });
});

// Dumb components
describe('dumb TICKERDATA component', () => {
    it('shouldn\'t render children when passed in', () => {
        const wrapper = shallow((
            <ConnectedTickerData tickerData={{fake: 'fake'}} dataColor="" dataUp={jest.fn()} dataDown={jest.fn()}>
                <div className="test" />
            </ConnectedTickerData>
            ));
        expect(wrapper.contains(<div className="test" />)).toEqual(false);
    });

    it('should pass props', () => {
        const fakeData = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '268.02',
            change: '1.65',
            change_percent: '0.48',
            last_trade_time: '2020-03-25T18:19:44.000Z',
            dividend: '0.44',
            yield: '0.18'
        };
        const fakeColor = '#aaa';
        const fn = jest.fn();
        const wrapper = shallow((<ConnectedTickerData tickerData={fakeData} dataColor={fakeColor} dataUp={fn} dataDown={fn} />));
        expect(wrapper.instance().props.tickerData).toEqual(fakeData);
        expect(wrapper.instance().props.dataColor).toEqual(fakeColor);
        expect(wrapper.instance().props.dataUp).toEqual(fn);
        expect(wrapper.instance().props.dataDown).toEqual(fn);
    });
});
