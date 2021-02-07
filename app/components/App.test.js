import { shallow } from 'enzyme';
import React from 'react';
import * as actions from '../action/stockTicker';
import App from './App.js';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(() => mockDispatch),
}));
jest.mock('../services', () => ({
    connect: (stockSymbol, cb) => {
        cb({ test: "test" })
    }
}))

jest.mock('../action/stockTicker', () => ({
    setStockTicker: jest.fn()
}))

const mountComponent = () => {
    const wrapper = shallow(<App />);
    return { wrapper };
};

describe('App', () => {
    it('should render component without any crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });
    it('should set StockTicker', () => {
        mountComponent();
        expect(mockDispatch).toHaveBeenCalled()
        expect(actions.setStockTicker).toBeCalledWith({ test: 'test' })
    })
});
