import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App container', () => {
    const state = {
        isLoading: false,
        data: null
    };

    describe('App initial', () => {
        const container = shallow(<App data={state} />);

        it('render Loading', () => {
            expect(container.find('p')).text.toEqual('Loading...');
        });

        it('render initial', () => {
            expect(container.find('Ui')).toHaveLength(0);
        });
    });
});
