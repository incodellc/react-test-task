import '../styles/application.scss';
import { connect as tickerConnect } from '../services';
import React, { PureComponent } from 'react';

import PriceCard from './price-card';
import Dropdown from './dropdown';

// The below line is here as an example of getting prices
tickerConnect('AAPL');

class App extends PureComponent {
    render() {
        return (
            <div className="stock-ticker jumbotron">
                <div className="col-6">
                    <div className="d-flex row justify-content-between mb-3">
                        <h1>Stock Blotter</h1>
                        <Dropdown />
                    </div>
                    <PriceCard />
                </div>
            </div>
        );
    }
}

export default App;
