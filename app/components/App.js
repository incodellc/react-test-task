import '../styles/application.scss';
import React, { PureComponent } from 'react';

import Ticker from './Ticker';

class App extends PureComponent {
    render() {
        return (
            <div className={'stock-ticker'}>
                <h1>Stock Blotter</h1>
                <Ticker />
            </div>
        );
    }
}

export default App;
