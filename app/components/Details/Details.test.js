import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Button } from 'reactstrap';
import { configureStore } from '../../store/configureStore';
import Details from './Details.js';

const mountComponent = (storeState = {}) => {
    const store = configureStore(storeState);
    const wrapper = mount(<Provider store={store} ><Details /></Provider>);
    return { wrapper };
};

describe('Detail', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);

    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render component without any crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });
    it('Changes toogle.', () => {
        const { wrapper } = mountComponent();
        wrapper.find(Button).simulate('click');
        expect(setState).lastCalledWith(true);
    })
});
