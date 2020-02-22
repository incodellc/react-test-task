import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import TableBody from './TableBody';

describe('Tests from TableBody component', ()=>{
	it('Renders the same number of cells as the data of one ticker', ()=>{
		const mockTickerData = {first: '', 
		                        second: '', 
		                        third: '', 
		                        fourth: ''};
		const wrapper = shallow(<TableBody tickerData = {mockTickerData}/>);
		const mockDataNumOfKeys = Object.keys(mockTickerData).length;
		expect(wrapper.find('td')).to.have.length(mockDataNumOfKeys);
	});
	describe("Testing if the up arrow or down arrow is displayed in the cell with id 'price'", ()=>{
		const mockTickerData = {price: ''};
		let mockIsUpArrow = null;
		const component = (tickerDataArg, isUpArrowArg)=><TableBody tickerData = {tickerDataArg} 
		                                                            isUpArrow = {isUpArrowArg}/>;
		it('Render up arrow', ()=>{
		    mockIsUpArrow = true;
		    const wrapper = shallow(component(mockTickerData, mockIsUpArrow));
		    expect(wrapper.find('#price').shallow().find('#upArrow')).to.have.length(1);
	    });

	    it('Render down arrow', ()=>{
		    mockIsUpArrow = false;
		    const wrapper = shallow(component(mockTickerData, mockIsUpArrow));
		    expect(wrapper.find('#price').shallow().find('#downArrow')).to.have.length(1);
	    });
	});
	
});