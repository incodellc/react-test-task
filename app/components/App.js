import '../styles/application.scss';
import {connect} from '../services';
import {connect as connectRedux} from 'react-redux';
import React, {PureComponent} from 'react';
import { DataTable } from './DataTable/DataTable';
import { Chart } from './Chart/Chart';
import { getNewData } from '../actions/actions';
import '../styles/application.scss';

// The below line is here as an example of getting prices

class App extends PureComponent {
    componentDidMount() {
        connect('AAPL', this.props.getData);
    }
    render() {
        const { data } = this.props;
        return (
            <div className="stock-ticker">
                <h1 className="heading">Stock Blotter</h1>
                <div className="container">
                    <DataTable data={data} />
                    <Chart data={data} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.tickerData
});

const mapDispatchToProps = (dispatch) => ({
    getData: (data) => dispatch(getNewData(data)),
});

export default connectRedux(mapStateToProps, mapDispatchToProps)(App);
