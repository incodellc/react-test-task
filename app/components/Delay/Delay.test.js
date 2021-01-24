import { mount } from 'enzyme';
import React from 'react';
import Swal from 'sweetalert2';
import * as socketService from '../../services';
import Delay from './Delay';
import { jest } from '@jest/globals';


jest.mock('../../services', () => ({
    socket: { emit: jest.fn() }
}));
jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

const mountComponent = (customProps = {}) => {
    const wrapper = mount(<Delay {...customProps} />);
    return { wrapper };
};

describe('Delay', () => {
    it('should render component without any crash', () => {
        const { wrapper } = mountComponent();
        expect(wrapper).toHaveLength(1);
    });
    it('should select option', () => {
        const { wrapper } = mountComponent({ intervals: [1000, 2000] });
        wrapper.find('option').first().simulate('change');
        expect(socketService.socket.emit).toBeCalledWith('changeInterval', '1000');
        expect(Swal.fire).toBeCalledWith('Success!', 'Interval is set to 1 seconds', 'success');
    });
});
