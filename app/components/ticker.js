import React from 'react';

import Tickers from './tickerPrice';
import { connect } from 'react-redux';
import { getTicker } from '../store/selectors/selectors';
import PropTypes from 'prop-types';
class TickerTable extends React.Component {
    render() {
        return (
      <div>
        {this.props.ticker.map(ticker => (
          <Tickers ticker={ticker} />
        ))}
      </div>
    );
    }
}
TickerTable.propTypes = {
    ticker: PropTypes.object
};
function mapStateToProps(state) {
    return { Ticker: getTicker(state) };
}
export default connect(mapStateToProps)(TickerTable);
