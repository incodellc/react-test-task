import React from 'react';
import { shallow} from 'enzyme';
import {Delay} from './Delay';

describe('Delay component', () => {
    describe('Should renders without errors', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Delay />);
        });

        it('Should has 1 sign', () => {
            const sign = wrapper.find('.delay-sign');
            expect(sign.length).toBe(1);
        });
        it('Should has 1 form', () => {
            const form = wrapper.find('.interval-form');
            expect(form.length).toBe(1);
        });
        it('Should has 1 label', () => {
            const label = wrapper.find('.interval-form__label');
            expect(label.length).toBe(1);
        });
        it('Should has 1 input', () => {
            const input = wrapper.find('.interval-form__input');
            expect(input.length).toBe(1);
        });
        it('Should has 1 button', () => {
            const button = wrapper.find('.interval-form__button');
            expect(button.length).toBe(1);
        });
    });
})
;
