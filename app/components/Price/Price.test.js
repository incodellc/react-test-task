import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store/configureStore';
import Price from './Price.js';


const mountComponent = (storeState = {}) => {
    const store = configureStore(storeState);
    const wrapper = mount(<Provider store={store} ><Price /></Provider>);
    return { wrapper };
};

describe('Price', () => {
    it('should render component without any crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });
    it('should render up icon', () => {
        const { wrapper } = mountComponent({ stockTicker: { yield: 1.5 } });
        expect(wrapper.find('.up').exists()).toBe(true);
        expect(wrapper.find('.down').exists()).toBe(false);
    });
    it('should render down icon', () => {
        const { wrapper } = mountComponent({ stockTicker: { yield: 0.9 } });
        expect(wrapper.find('.down').exists()).toBe(true);
        expect(wrapper.find('.up').exists()).toBe(false);
    });
});
