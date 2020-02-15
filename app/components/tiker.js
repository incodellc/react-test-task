import React from 'react';
import '../style.css';
import Ticker from './tickerPrice';
import { connect } from 'react-redux';
import { getTicker } from '../store/selectors/selectors';
import PropTypes from 'prop-types';
class TickerTable extends React.Component {
    render() {
        return (
      <div className="">
        {this.props.ticker.map(ticker => (
          <Ticker ticker={ticker}></Ticker>
        ))}
      </div>
    );
    }
}
TickerTable.propTypes = {
    ticker: PropTypes.object
};
function mapStateToProps(state) {
    return { ticker: getTicker(state) };
}
export default connect(mapStateToProps)(TickerTable);
