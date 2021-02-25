import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

const mountComponent = () => {
    const wrapper = shallow(<Controls />);
    return { wrapper };
};

describe('Controls tests', () => {
    it('should render component without crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });

    it('Should has 2 buttons', () => {
        const { wrapper } = mountComponent();
        const btn = wrapper.find('.controls__btn');
        expect(btn.length).toBe(2);
    });
});
