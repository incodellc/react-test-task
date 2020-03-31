import React, { Component } from 'react';
import { connect as connectSocket } from '../services/tickerService';
import { connect } from 'react-redux';

import TickerView from './TickerView';

class Ticker extends Component {
  componentDidMount() {
    connectSocket(this.props, this.props.stockSymbol);
  }

  render() {
    const { data } = this.props;

    const ticker = data ? <TickerView data={this.props} /> : null;
    const loading = !data ? <h1>Loading...</h1> : null;

    return(
      <div>
        {ticker}
        {loading}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Ticker);
