'use strict';

import React from 'react';
import SelectIntervalUpdate from './SelectIntervalUpdate';

import {intervalList} from './SelectIntervalUpdate';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';


describe('SelectIntervalUpdate', () => {
    const wrapper = shallow(<SelectIntervalUpdate/>);

    it('should be render select', () => {
        expect(wrapper.find('select')).to.have.lengthOf(1);
    });

    it('should be default option === 5000', () => {
        expect(wrapper.state('selectedValue')).to.equal('5000');
    });

    it('should be render option', () => {
        intervalList.forEach((value, index) => {
            expect(wrapper.contains(<option key={index} value={value}>{value}</option>)).to.equal(true);
        });
    });
});
