'use strict';

import React from 'react';
import BlockData from './BlockData.js';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('BlockData', () => {
    const wrapper = shallow(<BlockData title={'Price'}>{'Value'}</BlockData>);
    it('should be render title from props', () => {
        expect(wrapper.contains(<h4 className="block-for-data__title">Price</h4>)).to.equal(true);
    });

    it('should be render value from props', () => {
        expect(wrapper.contains(<div className="block-for-data__value">Value</div>)).to.equal(true);
    });
});
