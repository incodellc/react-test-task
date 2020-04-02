import '../styles/application.scss';
import {connect} from '../services';
import React, {PureComponent} from 'react';
import TickerLayout from './TickerLayout';
import '../styles/application.scss';

// The below line is here as an example of getting prices

class App extends PureComponent {
    componentDidMount() {
        connect('AAPL');
    }
    render() {
        return (
            <div className="stock-ticker">
                <h1 className="heading">Stock Blotter</h1>
                <TickerLayout />
            </div>
        );
    }
}

export default App;
