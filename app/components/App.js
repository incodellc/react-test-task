import '../styles/application.scss';
import { connect } from '../services';
import React, { PureComponent } from 'react';
import { socket } from '../services/tickerService';
import TickerSelector from './TickersSelector';
// The below line is here as an example of getting prices
class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: [],
            colorPrice: '#fff',
            colorChange: '#fff',
            colorChangePercent: '#fff',
            colorDividend: '#fff',
            colorYield: '#fff',

            currTicker: 'AAPL'
        };
    }

    connectToSevice = (ticker) => {
        connect(ticker, response => {
            this.setState({ data: response });
        });
    }


    componentDidMount = () => {
        try {
            this.connectToSevice(this.state.currTicker);
        } catch (error) {
            console.error(error);
        }
    }

    componentWillUnmount = () => {
        socket.close();
    }

    changeColor = (previousState, nextState, particularColorState) => {
        // const color = particularColorState;
        if (Number(previousState) < Number(nextState)) {
            this.setState({ [particularColorState]: '#71D071' });
        } else if (Number(previousState) > Number(nextState)) {
            this.setState({ [particularColorState]: '#B54E5A' });
        }
    }

    handleChange = (event) => {
        this.setState({ currTicker: event.target.value });
    };

    componentDidUpdate = (prevProps, prevState) => {
        // changing color for 'price'
        this.changeColor(
            prevState.data.price,
            this.state.data.price,
            'colorPrice');
        // changing color for 'change'
        this.changeColor(
            prevState.data.change,
            this.state.data.change,
            'colorChange');
        // changing color for 'percent cahnge'
        this.changeColor(
            prevState.data.change_percent,
            this.state.data.change_percent,
            'colorChangePercent');
        // changing color for 'dividend'
        this.changeColor(
            prevState.data.dividend,
            this.state.data.dividend,
            'colorDividend');
        // changing color for 'yield'
        this.changeColor(
            prevState.data.yield,
            this.state.data.yield,
            'colorYield');
        // if user choices some other ticker - ticker thereafter is changing
        if (prevState.currTicker !== this.state.currTicker) {
            socket.close();
            this.connectToSevice(this.state.currTicker);
        }
    }


    render() {
        const currDate = new Date(this.state.data.last_trade_time);
        return (
            <div className="container">
                <p>Ticker changer</p>
                <TickerSelector value={this.state.currTicker} onChange={this.handleChange} />
                <h1 className="stock-header">Stocks</h1>
                <div className="stock-ticker">
                    <div className="ticker">
                        <h4>Ticker</h4>
                        <p data-my-test-id="curr-ticker">{this.state.data.ticker}</p>
                    </div>
                    <div className="exchange">
                        <h4>Exchange</h4>
                        <p>{this.state.data.exchange}</p>
                    </div>
                    <div className="price">
                        <h4>Price</h4>
                        <p style={{ color: this.state.colorPrice }}>{this.state.data.price}</p>
                    </div>
                    <div className="change">
                        <h4>Change</h4>
                        <p style={{ color: this.state.colorChange }}>{this.state.data.change}</p>
                    </div>
                    <div className="percent-change">
                        <h4>Pcnt ch</h4>
                        <p style={{ color: this.state.colorChangePercent }}>{this.state.data.change_percent}</p>
                    </div>
                    <div className="last-trade-time">
                        <h4>Last Trade Time</h4>
                        <p data-my-test-id="curr-date">{currDate.toDateString()}</p>
                    </div>
                    <div className="dividend">
                        <h4>Dividend</h4>
                        <p style={{ color: this.state.colorDividend }}>{this.state.data.dividend}</p>
                    </div>
                    <div className="yeild">
                        <h4>Yield</h4>
                        <p style={{ color: this.state.colorYield }}>{this.state.data.yield}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
