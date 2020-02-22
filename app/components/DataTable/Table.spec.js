import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Table from './Table';

describe('Tests for Table component', ()=>{
	const arr = [1,2,3,4,5,6,7];
	const wrapper = shallow(<Table tickerDataArr={arr}/>);
	it('Table tag rendering', ()=>{
		expect(wrapper.find('table')).to.have.length(1);
	});
	it('Tbody tag rendering', ()=>{
		expect(wrapper.find('tbody')).to.have.length(1);
	});
});