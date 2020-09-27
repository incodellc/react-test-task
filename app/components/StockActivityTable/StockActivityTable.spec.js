import React from 'react';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import StockActivityTable from './StockActivityTable';
import { mockStore } from '../../../config/setupTest';

const store = mockStore({
    stockTicker: {
        currentData: {
            ticker: 'MNOV',
            exchange: 'NASDAQ',
            price: '-81.07',
            change: '-23.43',
            change_percent: '0.65',
            last_trade_time: '2020-09-27T07:49:32.000Z',
            dividend: '0.09',
            yield: '1.22'
        }
    }
});

it('should contain .StockActivityTable', () => {
    const wrapper = mount( <Provider store={store}>
        <StockActivityTable />
    </Provider>);
    expect(wrapper.find('.StockActivityTable').length).toBe(2);
});

it('should render StockActivityTable component', () => {
    const component = shallow( <Provider store={store}>
        <StockActivityTable />
    </Provider>);
    expect(component).toMatchSnapshot();
});
