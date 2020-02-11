import '../styles/application.scss';
import {connect} from '../services';
import React, {PureComponent} from 'react';
import moment from 'moment';
import '../styles/application.scss';
import axios from 'axios';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            reloadTime: '500'
        };
    }

    _isMouted = false;

    componentDidMount() {
        this._isMouted = true;
        this.getSocketData();
    }

    componentWillUnmount() {
        this._isMouted = false;
    }

    setReloadTime(res) {
        try {
            axios.post(`http://localhost:4000/${res}`);
        } catch(error) {
            console.log(error);
        }
    }

    getSocketData() {
        try {
            connect('AAPL', data => {// get data from socket
                if(this._isMouted) {
                    if(this.state.array.length <= 1) {
                        this.setState({ array: [...this.state.array, data] });
                    } else {
                        this.state.array.splice(0, 1);
                        this.setState({ array: [...this.state.array, data] });
                    }
                }
            });
        } catch(error) {
            console.log(error);
        }
    }

    displayChange(firtValue, secondValue) {
        const result = (
            <div className="show-change">
                    {firtValue > secondValue ?
                        <div style={{color: 'green'}}>
                        <div><i className="fas fa-chevron-up"></i></div>
                        <div>{this.displayNumberChange(firtValue, secondValue)}</div>
                    </div> :
                    <div style={{color: 'red'}}>
                    <div><i className="fas fa-chevron-down"></i></div>
                    <div>{this.displayNumberChange(firtValue, secondValue)}</div>
                </div>}
            </div>
        );
        return result;
    }

    displayNumberChange(firtNumber, secondNumber) {// calculate values chenge
        const result = parseFloat(firtNumber) - parseFloat(secondNumber);
        return result.toFixed(2);
    }

    render() {
        return (
            <div className="stock-ticker" data-test-id="stock-ticker">
                <div className="reload-time">
                    <h1>Choose reload time</h1>
                    <form onSubmit={() => this.setReloadTime(this.state.reloadTime)}>
                        <select onChange={(e) => { this.setState({ reloadTime: e.target.value }); }}>
                            <option value="500">0.5 sec</option>
                            <option value="2000">2 sec</option>
                            <option value="5000">5 sec</option>
                            <option value="10000">10 sec</option>
                        </select>
                        <button type="submit" data-testid="time-change-submit">Submit</button>
                    </form>
                </div>
                <h1>Stock Blotter</h1>
                {
                    this.state.array.length > 1 ?
                        <div data-testid="info-list" className="info-list">
                            <ul>
                                <li>
                                    <div data-testid="exchange">Exchange:</div> {this.state.array[0].exchange}
                                </li>
                                <li>
                                    <div>Price: {this.state.array[0].price}</div>
                                    { this.displayChange(this.state.array[0].price, this.state.array[1].price) }
                                </li>
                                <li>
                                    <div>Change: {this.state.array[0].change}</div>
                                    {this.displayChange(this.state.array[0].change, this.state.array[1].change)}
                                </li>
                                <li>
                                    <div>Change Percent: {this.state.array[0].change_percent} %</div>
                                    {this.displayChange(this.state.array[0].change_percent, this.state.array[1].change_percent)}
                                    <div>%</div>
                                </li>
                                <li>
                                    <div>Dividend: {this.state.array[0].dividend}</div>
                                    {this.displayChange(this.state.array[0].dividend, this.state.array[1].dividend)}
                                </li>
                                <li>
                                    <div>Yield: {this.state.array[0].yield}</div>
                                    {this.displayChange(this.state.array[0].yield, this.state.array[1].yield)}
                                </li>
                                <li>Last Trade Time: {moment(this.state.array[0].last_trade_time).format('LTS')}</li>
                            </ul>
                        </div> : <div data-testid="loading-test" className="loading">Loading...</div>
                }
            </div>
        );
    }
}

export default App;
