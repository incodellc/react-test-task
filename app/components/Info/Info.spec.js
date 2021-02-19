import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import {Info} from './Info';

const expectedProps =  {
    stockTicker: [{
        ticker: 'APPLE',
        exchange: 'NASDAQ',
        price: '174.15',
        change: '-73.70',
        change_percent: '0.55',
        last_trade_time: '2021-02-17T19:05:07.000Z',
        dividend: '0.75',
        yield: '0.54'
    }]
};

describe('Info component', () => {
    describe('checking propTypes', () => {
        it('should NOT throw an error', ()=>{
            const propsError = checkPropTypes(Info.propTypes, expectedProps, 'props', Info.name);
            expect(propsError).toBeUndefined();
        }
        );
    });
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Info {...expectedProps} />);
        });

        it('Should renders without error', () => {
            const component = wrapper.find('.info');
            expect(component.length).toBe(1);
        });

        it('Should render list', () => {
            const title = wrapper.find('.info-list');
            expect(title.length).toBe(1);
        });

        it('Should render 7 list items', () => {
            const title = wrapper.find('.info-list__item');
            expect(title.length).toBe(7);
        });
    });
});

