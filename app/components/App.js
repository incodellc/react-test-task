/* eslint-disable no-unused-vars */
import '../styles/application.scss';
import React from 'react';
import {connect as serviceConnect} from '../services/tickerService';
import TickerData from './TickerData';
export class App extends React.PureComponent {
    componentDidMount() {
        serviceConnect('AAPL');
    }

    render() {
        return (
            <div className="stock-ticker">
            <table>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Exchange</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Pcnt. Change</th>
                        <th>Last Trade Time</th>
                        <th>Divident</th>
                        <th>Yield</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TickerData />
                    </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default App;
