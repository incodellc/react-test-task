import React from 'react'
import { connect } from 'react-redux'

const StockPanel = ({ ticker }) => {
  console.log(ticker)
  return <div>Panel</div>
}

const mapStateToProps = state => ({ ticker: state })

export default connect(mapStateToProps)(StockPanel)
