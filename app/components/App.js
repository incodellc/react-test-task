import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { disconnect } from '../services';
import * as actions from '../actions';
import { StockCard } from './cards/stock';
import { REFRESH_INTERVAL_OPTIONS } from '../constans';

import '../styles/application.scss';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.onIntervalChange = this.onIntervalChange.bind(this);
    }

    componentDidMount() {
        this.props.setStock('AAPL');
    }

    componentWillUnmount() {
        disconnect();
    }

    onIntervalChange(event) {
        this.props.setInterval(+event.target.value);
    }

    render() {
        const { stockTicker: stock, refreshInterval } = this.props.redux;

        return (
            <div className="stock-ticker__container">
                <h1 className="stock-ticker__name">STOCKS</h1>
                <div className="stock-ticker__settings">
                    <p>Update Interval</p>
                    <select
                        className="stock-ticker__interval"
                        onChange={this.onIntervalChange}
                        value={refreshInterval}>
                        {REFRESH_INTERVAL_OPTIONS.map((time) => (
                            <option key={time} value={time * 1000}>
                                {time} sec
                            </option>
                        ))}
                    </select>
                </div>
                {stock ? (
                    <StockCard
                        key={stock.ticker}
                        ticker={stock.ticker}
                        exchange={stock.exchange}
                        price={stock.price}
                        change={stock.change}
                        dividend={stock.dividend}
                        changePercent={stock.change_percent}
                        time={stock.last_trade_time}
                        income={stock.yield}
                    />
                ) : (
                    <p className="stock-ticker__empty">Server not connected.</p>
                )}
            </div>
        );
    }
}

export default connect(
    (state) => ({ redux: state }),
    (dispatch) => ({
        setStock: async(stockName) => dispatch(actions.setStock(stockName)),
        setInterval: async(interval) => dispatch(actions.setInterval(interval)),
    })
)(App);
