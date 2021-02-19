import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow} from 'enzyme';
import {DataTable} from './DataTable';

const expectedProps = {
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

describe('DataTable component', () => {
    describe('checking propTypes', () => {
        it('should NOT throw an error', () => {
            const propsError = checkPropTypes(DataTable.propTypes, expectedProps, 'props', DataTable.name);
            expect(propsError).toBeUndefined();
        });
    });
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<DataTable {...expectedProps} />);
        });

        it('Should renders without error', () => {
            const component = wrapper.find('.data-table');
            expect(component.length).toBe(1);
        });
        it('Should render table header', () => {
            const header = wrapper.find('.table-header');
            expect(header.length).toBe(1);
        });
        it('Should render 2 tables', () => {
            const tables = wrapper.find('table');
            expect(tables.length).toBe(2);
        });
        it('Should render table head component', () => {
            const thead = wrapper.find('thead');
            const tr = thead.find('tr');
            const th = tr.find('th');
            expect(thead.length).toBe(1);
            expect(tr.length).toBe(1);
            expect(th.length).toBe(3);
        });
        it('Should render table content', () => {
            const component = wrapper.find('.table-content');
            const tbody = component.find('tbody');
            expect(tbody.length).toBe(1);
            expect(component.length).toBe(1);
        });
    });
});
