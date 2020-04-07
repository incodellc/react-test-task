import '../styles/application.scss';
// import { connect } from '../services';
import { connect } from 'react-redux';
import React from 'react';
import { initTickerService } from '../services';
import { updateStockPriceAction } from '../actions/StockPriceAction';
import PropTypes from 'prop-types';
import { delayService } from '../services/delayService';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.price = [];
        this.change = [];
        this.change_percent = [];
        this.divident = [];
        this.yield = [];

        this.updateTickerStream = this.updateTickerStream.bind(this);
        this.updateColorOfTickerValue = this.updateColorOfTickerValue.bind(this);
    }

    componentDidMount() {
        initTickerService('AAPL', this.props.updateStockPriceAction);
    }

    updateTickerStream(arr1, arr2) {
        const ticker = this.props.tickerData;

        for (const t in ticker) {
            if (ticker.hasOwnProperty(t)) {
                arr1.push(t);
            }
        }
        for (const t in ticker) {
            if (ticker.hasOwnProperty(t)) {
                arr2.push(ticker[t]);
            }
        }
        this.price = [
            +this.price[1], +arr2[2]
        ];
        this.change = [
            +this.change[1], +arr2[3]
        ];
        this.change_percent = [
            +this.change_percent[1], +arr2[4]
        ];
        this.divident = [
            +this.divident[1], +arr2[6]
        ];
        this.yield = [
            +this.yield[1], +arr2[7]
        ];
    }

    updateColorOfTickerValue(arr) {
        if (arr[0] > arr[1]) {
            return '#ee534f';
        } else if (arr[0] <= arr[1]) {
            return '#26a59a';
        } else if (isNaN(arr[0]) || isNaN(arr[1])) {
            return '#26a59a';
        }
    }

    updateSignOfTickerValue(arr) {
        if (isNaN(arr[0]) || isNaN(arr[1])) {
            return true;
        } else if (arr[0] <= arr[1]) {
            return true;
        } else if (arr[0] > arr[1]) {
            return false;
        }
    }

    delayChangeClick(value) {
        delayService(+value);
        window.location.reload();
    }

    render() {
        const arrayOfKeys = [];
        const arrarOfValues = [];
        this.updateTickerStream(arrayOfKeys, arrarOfValues);

        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>

                <select className="delay-select" onChange={e => this.delayChangeClick(e.target.value)}>
                    <option value hidden selected disabled>Time</option>
                    <option value="5000">5s</option>
                    <option value="4000">4s</option>
                    <option value="3000">3s</option>
                    <option value="2000">2s</option>
                    <option value="1000">1s</option>
                </select>

                <table className="ticker-table">
                    <tbody>
                        <tr>
                            <th>{arrayOfKeys[0]}</th>
                            <td style={{
                                color: '#26a59a'
                            }}>{arrarOfValues[0]}</td>
                        </tr>
                        <tr>
                            <th>{arrayOfKeys[1]}</th>
                            <td style={{
                                color: '#26a59a'
                            }}>{arrarOfValues[1]}</td>
                        </tr>
                        <tr>
                            <th>{arrayOfKeys[2]}</th>
                            <td style={{
                                color: this.updateColorOfTickerValue(this.price)
                            }}
                            >{arrarOfValues[2]}
                                {(this.updateSignOfTickerValue(this.price) === true ? <span> &#8679;</span> : <span> &#8681;</span>)}
                            </td>
                        </tr>
                        <tr>
                            <th>{arrayOfKeys[3]}</th>
                            <td style={{
                                color: this.updateColorOfTickerValue(this.change)
                            }}
                            >{arrarOfValues[3]}
                                {(this.updateSignOfTickerValue(this.change) === true ? <span> &#8679;</span> : <span> &#8681;</span>)}
                            </td>
                        </tr>
                        <tr>
                            <th>{arrayOfKeys[4]}</th>
                            <td style={{
                                color: this.updateColorOfTickerValue(this.change_percent)
                            }}
                            >{arrarOfValues[4]}
                                {(this.updateSignOfTickerValue(this.change_percent) === true ? <span> &#8679;</span> : <span> &#8681;</span>)}
                            </td>
                        </tr>
                        <tr>
                            <th>{arrayOfKeys[5]}</th>
                            <td style={{
                                color: '#26a59a'
                            }}>{arrarOfValues[5]}</td>
                        </tr>
                        <tr>
                            <th>{arrayOfKeys[6]}</th>
                            <td style={{
                                color: this.updateColorOfTickerValue(this.divident)
                            }}
                            >{arrarOfValues[6]}
                                {(this.updateSignOfTickerValue(this.divident) === true ? <span> &#8679;</span> : <span> &#8681;</span>)}
                            </td>
                        </tr>
                        <tr>
                            <th>{arrayOfKeys[7]}</th>
                            <td style={{
                                color: this.updateColorOfTickerValue(this.yield)
                            }}
                            >{arrarOfValues[7]}
                                {(this.updateSignOfTickerValue(this.yield) === true ? <span> &#8679;</span> : <span> &#8681;</span>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

App.propTypes = {
    updateStockPriceAction: PropTypes.func,
    tickerData: PropTypes.object
};

const mapDispatchToProps = {
    updateStockPriceAction
};

export default connect(state => state, mapDispatchToProps)(App);
