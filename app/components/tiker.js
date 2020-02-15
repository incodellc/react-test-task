import React from 'react';
import '../style.css';
import Ticker from './tickerPrice';
import { connect } from 'react-redux';
import { getTicker } from '../store/selectors/selectors';
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
function mapStateToProps(state) {
    return { ticker: getTicker(state) };
}
export default connect(mapStateToProps)(TickerTable);
