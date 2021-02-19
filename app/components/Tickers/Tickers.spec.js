import React from 'react';
import { shallow } from 'enzyme';
import {Tickers} from './Tickers';
import checkPropTypes from 'check-prop-types';


describe('Tickers component', () => {
    describe('checking propTypes', () => {
        it('should NOT throw an error', ()=>{
            const expectedProps = {
                setCurTicker: jest.fn(),
                setTicker: jest.fn(),
                currentInterval: 5000,
                stockTicker: 'AAPL'
            };
            const propsError = checkPropTypes(Tickers.propTypes, expectedProps, 'props', Tickers.name);
            expect(propsError).toBeUndefined();
        }
        );
    });
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const expectedProps = {
                setCurTicker: jest.fn(),
                setTicker: jest.fn(),
                currentInterval: 5000,
                stockTicker: 'AAPL'
            };
            wrapper = shallow(<Tickers {...expectedProps} />);
        });

        it('Should renders without error', () => {
            const component = wrapper.find('.tickers-list');
            expect(component.length).toBe(1);
        });

        it('Should render 5 <li/>', () => {
            const li = wrapper.find('.tickers-list__item');
            expect(li.length).toBe(5);
        });
    });
});
