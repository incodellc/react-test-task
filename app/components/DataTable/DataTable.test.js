import React from 'react';
import { shallow } from 'enzyme';
import { DataTable } from './DataTable';
import { findByTestAtrr } from '../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<DataTable {...props} />);

    return component;
};

describe('DataTable component', () => {
    let component;
    const props = {
        data: [
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '214.09',
                change: '70.55',
                change_percent: '0.13',
                last_trade_time: '2020-04-05 23:08:58',
                dividend: '0.39',
                yield: '0.91',
                upward: true,
            },
        ],
    };

    beforeEach(() => {
        component = setUp(props);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'table');
        expect(wrapper.length).toBe(1);
    });
});
