import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Header';

describe('Header component test ', () => {
    const header = shallow(<Header />);

    it('should renders properly', () => {
        expect(header).toMatchSnapshot();
    });

    it ('should render text Stock Blotter', () => {
        expect(header.find('h1').text()).toEqual('Stock Blotter');
    });
});
