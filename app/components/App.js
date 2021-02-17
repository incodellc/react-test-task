import '../styles/application.scss';
import {connect as socketConnect} from '../services';
import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {setStockTicker} from '../actions';

class App extends PureComponent {
    componentDidMount() {
        socketConnect('AAPL', this.props.setStockTicker);
    }
    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({ stockTicker: state.stockTicker });
const mapDispatchToProps = {
    setStockTicker
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

