import React from 'react';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import CustomFetchIntervalForm from './CustomFetchIntervalForm';
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

it('should contain .CustomFetchIntervalForm', () => {
    const wrapper = mount( <Provider store={store}>
        <CustomFetchIntervalForm />
    </Provider>);
    expect(wrapper.find('.CustomFetchIntervalForm').length).toBe(1);
});

it('should render CustomFetchIntervalForm component', () => {
    const component = shallow( <Provider store={store}>
        <CustomFetchIntervalForm />
    </Provider>);
    expect(component).toMatchSnapshot();
});
