import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const StockPanel = ({ firstPrice, ticker }) => {
  const priceFound = firstPrice && ticker.price

  let priceUnitChanged = 0
  let pricePercentChanged = 0
  let lastTrade = moment
    .utc()
    .startOf('day')
    .fromNow()

  if (priceFound) {
    priceUnitChanged = (ticker.price - firstPrice).toFixed(2)
    pricePercentChanged = (
      ((ticker.price - firstPrice) / firstPrice) *
      100
    ).toFixed(2)

    lastTrade = moment
      .utc(ticker.last_trade_time)
      .startOf('day')
      .fromNow()
  }

  return (
    <div className="stock-panel">
      <div className="exchange-info">
        <span className="stock-symbol">{ticker.stockSymbol}</span>
        <span className="exchange">{ticker.exchange}</span>
      </div>
      <div className="trade-info">
        <div className="price-changes">
          <span className="current-price">{ticker.price}</span>
          <span
            className="change-units"
            data-change={priceUnitChanged >= 0 ? 'increased' : 'decreased'}>
            {priceUnitChanged}
          </span>
          <span
            className="change-percent"
            data-change={pricePercentChanged >= 0 ? 'increased' : 'decreased'}>
            {pricePercentChanged}%
          </span>
        </div>
        <div className="last-trade">
          <span className="time">last trade: {lastTrade}</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ ticker: state })

export default connect(mapStateToProps)(StockPanel)
