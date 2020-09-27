import React from 'react';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import App from './App';
import { mockStore } from '../../config/setupTest';

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

it('should contain .stock-wrapper', () => {
    const wrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(wrapper.find('.stock-wrapper').length).toBe(1);
});

it('should render App component with props', () => {
    const props = {
        currentData: {
            ticker: 'MNOV',
            exchange: 'NASDAQ',
            price: '-81.07',
            change: '-23.43',
            change_percent: '0.65',
            last_trade_time: '2020-09-27T07:49:32.000Z',
            dividend: '0.09',
            yield: '1.22'
        },
        saveTickerData: () => {},
    };

    const component = shallow(<Provider store={store}>
        <App {...props}/>
    </Provider>);
    expect(component).toMatchSnapshot();
});

it('should render App component without props', () => {
    const component = shallow(<Provider store={store}>
        <App />
    </Provider>);
    expect(component).toMatchSnapshot();
});
