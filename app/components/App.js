import '../styles/application.scss';
import React, { PureComponent } from 'react';
import Ui from './Ui';
import { connect } from '../services/tickerService';

// The below line is here as an example of getting prices
// connect('AAPL');

class App extends PureComponent {
    state = {
        stockSymbol: 'AAPL',
        time: 500,
        data: null,
        loading: true
    }
    componentDidMount() {
        connect(this.state.stockSymbol, this.onLoadData);
    }
    onLoadData = (data) => {
        const newData = JSON.parse(data);
        this.setState({
            data: newData,
            loading: false,
        });
    }

    render() {
        const { data, loading } = this.state;
        if (data === null && loading === true) {
            return (<p className="green">Loading...</p>);
        }
        if (( typeof data !== 'object' || data === null || Object.keys(data).length === 0 ) && loading === false) {
            return (<p className="red">Error!!!!!!!!</p>);
        }
        return (<div className="stock-ticker">
            <h1>Stock Blotter</h1>
            <Ui data={this.state.data} time={this.state.time}/>
            </div>);
    }
}


export default App;
