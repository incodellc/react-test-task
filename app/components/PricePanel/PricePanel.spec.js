'use strict';

import React from 'react';
import ListBlocksData from '../ListBlocksData/ListBlocksData';
import {PricePanel} from './PricePanel';

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

describe('PricePanel', () => {
    const wrapper = shallow(<PricePanel stockTicker={{}}/>);

    it('should be render loader image', () => {
        expect(wrapper.find('img')).to.have.lengthOf(1);
    });

    it('after update props should be render list data', () => {
        wrapper.setProps({stockTicker: data}).update();
        expect(wrapper.contains(<ListBlocksData objWithData={data}/>)).to.equal(true);
        expect(wrapper.find('img')).to.have.lengthOf(0);
    });
});
