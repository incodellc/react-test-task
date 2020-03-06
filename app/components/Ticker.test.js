import React from 'react';
import { configureStore } from '../store/configureStore';
import { shallow} from 'enzyme';
import Ticker from '../components/Ticker';

const store = configureStore();
const state = {
    data: {ticker: 'new data', price: 'new price'},
    oldPrice: 'price1'
};
const data = '{"ticker": "new data", "price": "new price"}';
store.dispatch({type: 'UPDATEDATA', data});

describe('Ticker component', () => {
    const ticker = shallow(<Ticker store = {store} tickerName = "TSLA"/>);
    it('rendered Ticker', () => {
        expect(ticker.length).toEqual(1);
        expect(ticker.name()).toEqual('Ticker');
    });
    it('prop oldPrice equals initial value ', () => {
        expect(ticker.prop('oldPrice')).toEqual('0');
    });
    it('prop data equals received data', () => {
        expect(ticker.prop('data')).toEqual(state.data);
    });
    it('prop tickerName equals TSLA', () => {
        expect(ticker.prop('tickerName')).toBe('TSLA');
    });
});
