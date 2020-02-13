import '../styles/application.scss';
import { connect } from '../services';
import React, { PureComponent } from 'react';

// The below line is here as an example of getting prices
// connect('AAPL');

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: [],
        };
    }

    componentDidMount = () => {
        connect('AAPL', response => {
            this.setState({ data: response });
        });
    }


    render() {
        return (
            <div className="stock-ticker">
                <div className="ticker">
                    <h4>Ticker</h4>
                    {this.state.data.ticker}
                </div>
                <div className="exchange">
                    <h4>Exchange</h4>
                    {this.state.data.exchange}
                </div>
                <div className="price">
                    <h4>Price</h4>
                    {this.state.data.price}
                </div>
                <div className="change">
                    <h4>Change</h4>
                    {this.state.data.change}
                </div>
                <div className="percent-change">
                    <h4>Pcnt ch</h4>
                    {this.state.data.change_percent}
                </div>
                <div className="last-trade-time">
                    <h4>Last Trade Time</h4>
                    {this.state.data.last_trade_time}
                </div>
                <div className="dividend">
                    <h4>Dividend</h4>
                    {this.state.data.dividend}
                </div>
                <div className="yeild">
                    <h4>Yield</h4>
                    {this.state.data.yield}
                </div>
            </div>
        );
    }
}

export default App;
