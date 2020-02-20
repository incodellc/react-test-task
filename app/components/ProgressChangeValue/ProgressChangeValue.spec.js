'use strict';

import React from 'react';
import ProgressChangeValue from './ProgressChangeValue.js';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('ProgressChangeValue', () => {
    const wrapper = shallow(<ProgressChangeValue price={100}/>);

    it('has default state isUpPrice == true', () => {
        expect(wrapper.state().isUpPrice).to.equal(true);
    });

    it('should be wrapper component', () => {
        expect(wrapper.find('p')).to.have.lengthOf(1);
    });

    it('wrapper should be color #3f8600', () => {
        expect(wrapper.prop('style').color).to.equal('#3f8600');
    });

    it('should be render image arrow', () => {
        expect(wrapper.find('svg')).to.have.lengthOf(1);
    });

    it('arrow must inherit color from parent element', () => {
        expect(wrapper.find('svg').props('style').fill).to.equal('currentColor');
    });

    it('arrow direction points upp', () => {
        expect(wrapper.find('svg').prop('style').transform).to.equal('rotate(180deg)');
    });

    it('should be render price(100) from props ', () => {
        expect(wrapper.contains(<span>{100}</span>)).to.equal(true);
    });

    it('set new props price and should be change price to 90', () => {
        wrapper.setProps({ price: 90 }).update();
        expect(wrapper.contains(<span>{90}</span>)).to.equal(true);
    });

    it('wrapper should be color #cf1322', () => {
        expect(wrapper.prop('style').color).to.equal('#cf1322');
    });

    it('arrow direction points down', () => {
        expect(wrapper.find('svg').prop('style').transform).to.equal('');
    });

    it('set new props price and should be change price to 120', () => {
        wrapper.setProps({ price: 120 }).update();
        expect(wrapper.contains(<span>{120}</span>)).to.equal(true);
    });

    it('wrapper should be color #3f8600', () => {
        expect(wrapper.prop('style').color).to.equal('#3f8600');
    });

    it('arrow direction points upp', () => {
        expect(wrapper.find('svg').prop('style').transform).to.equal('rotate(180deg)');
    });
});
