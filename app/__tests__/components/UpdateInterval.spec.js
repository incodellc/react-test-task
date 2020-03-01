import React from 'react'
import UpdateInterval from '../../components/UpdateInterval'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() })

describe('UpdateInterval component:', () => {
  const props = {
    ticker: {
      stockSymbol: 'AAPL',
      exchange: 'NASDAQ',
      price: 220,
      change: 14,
      change_percent: 0.43,
      last_trade_time: '2020-02-29T10:14:27.000Z',
      dividend: 0.87,
      yield: 0.14,
      updateInterval: 5000
    }
  }

  const wrapper = shallow(<UpdateInterval {...props} />)

  describe('Render props:', () => {
    const timeValues = [500, 1000, 5000, 10000]

    it('should render current interval value', () => {
      const { updateInterval } = props.ticker
      expect(wrapper.find('.dropdown-trigger .value').text()).to.equal(
        `${updateInterval / 1000} sec`
      )
    })

    it('should render time values', () => {
      expect(wrapper.find('.dropdown li')).lengthOf(timeValues.length)
    })

    it('should render correct time values', () => {
      expect(wrapper.find('.dropdown li').map(el => el.text())).to.have.members(
        timeValues.map(value => `${value / 1000} sec`)
      )
    })

    it('the dropdown menu should be collapsed', () => {
      expect(wrapper.find('.dropdown .open')).to.have.lengthOf(0)
    })
  })
})
