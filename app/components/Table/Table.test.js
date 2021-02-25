import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../../store/configureStore';
import Table from './Table';

const mountComponent = (state = {}) => {
    const store = configureStore(state);
    const wrapper = mount(<Provider store={store} ><Table /></Provider>);
    return { wrapper };
};

describe('Table tests', () => {
    it('should render component without crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });
});
