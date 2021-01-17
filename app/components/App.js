import React, {PureComponent} from 'react';
import Ticker from '../components/Ticker';
import '../styles/application.scss';

class App extends PureComponent {
    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <Ticker tickerName="AMZN" />
            </div>
        );
    }
}

export default App;
