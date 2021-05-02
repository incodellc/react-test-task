import React from 'react';
import {connect} from '../services';
import '../styles/application.scss';
import {useDispatch} from 'react-redux';
import {updateTicker} from '../redux/features/stocks/stockTicker';
import Layout from './Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import StocksTable from './Table/StocksTable';

const App = () => {
    const dispatch = useDispatch();
    const tickerData = (data) => dispatch(updateTicker(data));

    connect('AAPL', tickerData);

    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={StocksTable} />
            </Switch>
        </Layout>
    );
};

export default App;
