import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import TableHead from './TableHead';

describe('Tests for TableHead component', ()=>{
	const wrapper = shallow(<TableHead />);
	const thead = wrapper.find('thead');
	it('The <thead> is drawn (only once)', ()=>{
		expect(thead).to.have.length(1);
	});
	it('Only two <tr> are drawn', ()=>{
	    const trArr = thead.shallow().find('tr');
	    expect(trArr).to.have.length(2); 
	});
});