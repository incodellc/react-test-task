'use strict';

import React from 'react';
import ListBlocksData, {getTimeHMS} from './ListBlocksData';
import ProgressChangeValue from '../ProgressChangeValue/ProgressChangeValue';
import BlockData from './BlockData/BlockData';

import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';

const data = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '252.83',
    change: '10.32',
    change_percent: '0.85',
    last_trade_time: '2020-02-20T18:11:27.000Z',
    dividend: '0.67',
    yield: '0.39'
};

describe('ListBlocksData', () => {
    const wrapper = shallow(<ListBlocksData objWithData={data}/>);

    it('should be render list with data', () => {
        expect(wrapper.find('.block-list').children()).to.have.lengthOf(Object.keys(data).length);
    });

    it('should be render progress component for price', () => {
        expect(wrapper.contains(<BlockData key="2" title={'PRICE'}><ProgressChangeValue price={data.price}/></BlockData>)).to.equal(true);
    });

    it('should be render transform date', () => {
        expect(wrapper.contains(<BlockData key="5" title={'LAST TRADE TIME'}>{getTimeHMS(new Date(data['last_trade_time']))}</BlockData>)).to.equal(true);
    });
});
