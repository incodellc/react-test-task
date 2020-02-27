import React from 'react'
import { connect } from 'react-redux'

const StockPanel = ({ firstPrice, ticker }) => {
  // const priceFound = firstPrice && ticker.price
  // const priceChanged = priceFound ? (ticker.price - firstPrice).toFixed(2) : 0

  return (
    <div className="stock-panel">
      <div className="stock-symbol">
        <span>{ticker.stockSymbol}</span>
      </div>
      <div className="trade-info">
        <div className="price-changes">
          <span className="current-price">{ticker.price}</span>
          <span className="change-units" data-change="increased">
            3
          </span>
          <span className="change-percent" data-change="increased">
            13%
          </span>
        </div>
        <div className="last-trade">
          <span className="time">last trade: 5sec ago</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ ticker: state })

export default connect(mapStateToProps)(StockPanel)
