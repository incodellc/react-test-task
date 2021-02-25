import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as actions from '../actions/tickers';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(() => jest.fn()),
}));

jest.mock('../actions/tickers', () => ({
    updateTicker: jest.fn()
}));

jest.mock('../services', () => ({
    connect: (stockSymbol, cb) => {
        cb({ test: 'test' });
    }
}));

const mountComponent = () => {
    const wrapper = shallow(<App />);
    return { wrapper };
};

describe('App tests', () => {
    it('should render component without crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });

    it('should call StockTicker service', () => {
        expect(actions.updateTicker).toBeCalledWith({ test: 'test' });
    });
});
