'use strict';

import React from 'react';
import PricePanel from './PricePanel.js';
import loader from './loader.svg';

import {mount} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';

const context = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '252.83',
    change: '10.32',
    change_percent: '0.85',
    last_trade_time: '2020-02-20T18:11:27.000Z',
    dividend: '0.67',
    yield: '0.39'
};

describe('PricePanel', () => {
    const wrapper = mount(<PricePanel/>, context);
    it('should be render loader image', () => {
        expect(wrapper.contains(<img src={loader} alt="loading" style={{margin: '0 auto'}}/>)).to.equal(true);
    });
});
