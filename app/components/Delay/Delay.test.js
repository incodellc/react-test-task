import React from 'react';
import { shallow } from 'enzyme';
import Delay from './Delay';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
}));

const mountComponent = () => {
    const wrapper = shallow(<Delay />);
    return { wrapper };
};

describe('Delay tests', () => {
    it('should render component without crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });

    it('Should has 1 select', () => {
        const { wrapper } = mountComponent();
        const btn = wrapper.find('.delay__select');
        expect(btn.length).toBe(1);
    });
});
