import '../styles/application.scss';
import { connect } from '../services';
import React, { PureComponent } from 'react';
import PriceTicker from './PriceTicker/PriceTicker';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            response: false
        };
    }
    componentDidMount() {
        const stateChange = (data) => {
            this.setState({ response: data });
        };
        connect('AAPL', stateChange);
    }
    render() {
        const { response } = this.state;

        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                {response
                    ?
                    <PriceTicker jsonResponse={response} />
                    :
                    <p>Loading...</p>}
            </div>
        );
    }
}

export default App;
