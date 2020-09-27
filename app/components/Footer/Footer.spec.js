import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

it('should contain .stock-ticker__footer', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.find('.stock-ticker__footer').length).toBe(1);
});

it('should render Footer component', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
});
