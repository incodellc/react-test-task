import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

it('should contain .stock-wrapper__header', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('.stock-wrapper__header').length).toBe(1);
});

it('should render Header component', () => {
    const component = shallow(<Header/>);
    expect(component).toMatchSnapshot();
});
