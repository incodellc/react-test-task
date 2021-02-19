import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import {TableItem} from './TableItem';
const expectedProps = {
    stock: {
        ticker: 'APPLE',
        exchange: 'NASDAQ',
        price: '174.15',
        change: '-73.70',
        change_percent: '0.55',
        last_trade_time: '2021-02-17T19:05:07.000Z',
        dividend: '0.75',
        yield: '0.54'
    }
};

describe('TableItem component', () => {
    describe('checking propTypes', () => {
        it('should NOT throw an error', ()=>{
            const propsError = checkPropTypes(TableItem.propTypes, expectedProps, 'props', TableItem.name);
            expect(propsError).toBeUndefined();
        }
        );
    });
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<TableItem {...expectedProps} />);
        });

        it('Should renders without error', () => {
            const component = wrapper.find('tr');
            expect(component.length).toBe(1);
        });

        it('Should render 3 td', () => {
            const title = wrapper.find('td');
            expect(title.length).toBe(3);
        });
    });
});
