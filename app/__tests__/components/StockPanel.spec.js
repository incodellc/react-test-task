import React from 'react'
import StockPanel from '../../components/StockPanel'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { expect } from 'chai'
import moment from 'moment'

Enzyme.configure({ adapter: new Adapter() })

describe('StockPanel component:', () => {
  const props = {
    initialPrice: 250,
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

  const wrapper = shallow(<StockPanel {...props} />)

  describe('Render props:', () => {
    it('should render stockSymbol', () => {
      const { stockSymbol } = props.ticker
      expect(wrapper.find('.stock-symbol').text()).to.equal(stockSymbol)
    })

    it('should render exchange', () => {
      const { exchange } = props.ticker
      expect(wrapper.find('.exchange').text()).to.equal(exchange)
    })

    it('should render last trade time', () => {
      const lastTrade = moment
        .utc(props.ticker.last_trade_time)
        .startOf('day')
        .fromNow()

      expect(wrapper.find('.last-trade .time').text()).to.equal(
        `last trade: ${lastTrade}`
      )
    })

    it('should render currentPrice', () => {
      const { price } = props.ticker
      expect(+wrapper.find('.current-price').text()).to.equal(price)
    })

    describe('Price changes:', () => {
      it('should render price change', () => {
        const { price } = props.ticker
        const diff = price - props.initialPrice

        expect(+wrapper.find('.change-units').text()).to.equal(diff)
      })

      it('should render price change percent', () => {
        const { price } = props.ticker
        const { initialPrice } = props
        const percent = ((price - initialPrice) / initialPrice) * 100

        expect(wrapper.find('.change-percent').text()).to.equal(
          percent.toFixed(2) + '%'
        )
      })

      it('change units should have data-change attr value of `decreased`', () => {
        expect(wrapper.find('.change-units').prop('data-change')).to.equal(
          'decreased'
        )
      })

      it('change percent should have data-change attr value of `decreased`', () => {
        expect(wrapper.find('.change-percent').prop('data-change')).to.equal(
          'decreased'
        )
      })

      describe('Set new price prop:', () => {
        const nextProps = {
          ...props,
          ticker: {
            ...props.ticker,
            price: 270 // change the current price to a larger than initial
          }
        }

        beforeEach(() => wrapper.setProps(nextProps))
        after(() => wrapper.setProps(props))

        it('should render currentPrice', () => {
          const { price } = nextProps.ticker
          expect(+wrapper.find('.current-price').text()).to.equal(price)
        })

        it('change units should have data-change attr value of `increased`', () => {
          expect(wrapper.find('.change-units').prop('data-change')).to.equal(
            'increased'
          )
        })

        it('change percent should have data-change attr value of `increased`', () => {
          expect(wrapper.find('.change-percent').prop('data-change')).to.equal(
            'increased'
          )
        })
      })
    })
  })
})
