import { connect as ioConnect } from '../services';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTicker } from '../reducers/actions';
import Table from './Table';
import Detail from './Detail';
import Controls from './Controls';
import '../styles/application.scss';

const App = () => {
    const dispatch = useDispatch();
    const updateData = (data) => dispatch(updateTicker(data));

    ioConnect('AAPL', updateData);

    return (
        <div className="stock-ticker">
            <h1 className="title">Stock Blotter</h1>
            <Controls />
            <Switch>
                <Route path="/table" component={Table} />
                <Route path="/detail" component={Detail} />
                <Redirect to="/table"/>
            </Switch>
        </div>
    );
};

export default App;
