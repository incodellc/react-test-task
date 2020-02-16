import React from 'react';
import { connect as ioConnect } from '../services';
import '../styles/application.scss';
import Tickers from './tickerPrice';
import { connect } from 'react-redux';
import { getTicker } from '../store/selectors/selectors';
import PropTypes from 'prop-types';

import { newTicker } from '../store/action/action';
class TickerTable extends React.Component {
    componentDidMount() {
        ioConnect('AAPL', this.handleTicker);
    }
    handleTicker = data => {
        console.log('handleTicker', data);
        this.props.newTicker(JSON.parse(data));
    };
    render() {
        console.log('render ticker', this.props.ticker);
        return (
      <div className="table">
        <div className="actual-price">
          actual Price =
          {(this.props.ticker[this.props.ticker.length - 1] || {}).price}
        </div>
        <div className="price">
          {this.props.ticker.map(ticker => (
            <Tickers ticker={ticker} />
          ))}
          Price History
        </div>
      </div>
    );
    }
}
TickerTable.propTypes = {
    ticker: PropTypes.array,
    newTicker: PropTypes.func
};
function mapStateToProps(state) {
    return { ticker: getTicker(state) };
}
export default connect(mapStateToProps, { newTicker })(TickerTable);
