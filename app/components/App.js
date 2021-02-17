import '../styles/application.scss';
import {connect as socketConnect} from '../services';
import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {setStockTicker} from '../actions';
import DataTable from './DataTable/DataTable';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Info from './Info/Info';
import Delay from './Delay/Delay';

class App extends PureComponent {
    componentDidMount() {
        socketConnect('AAPL', this.props.setStockTicker);
    }
    render() {
        return (
            <div className="stock-ticker">
                <h1>AAPL</h1>
                <div className="settings">
                    <Link to="/info" className="settings__view">Info</Link>
                    <Link to="/table" className="settings__view">Table</Link>
                    <Delay/>
                </div>
                <Switch>
                    <Route path="/info" component={Info} />
                    <Route path="/table" component={DataTable} />
                    <Redirect to="/info"/>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = state => ({ stockTicker: state.stockTicker, location: state.router.location });

const mapDispatchToProps = {
    setStockTicker
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

