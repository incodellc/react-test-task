import React from 'react';
import '../styles/application.scss';
import {connect} from 'react-redux';
import {tickerService, requestData} from '../services';
import PropTypes from 'prop-types';
import ExchangeData from './ExchangeData';
import DataRequestForm from './DataRequestForm';

// The below line is here as an example of getting prices
tickerService();

function App({stockTicker}) {
    console.log(stockTicker);

    const onDataRequest = (stockSymbol, interval) => {
        console.log('New data request');
        requestData(stockSymbol, interval);
    };
    return (
        <div className="stock-ticker">
            <h1>Stock Blotter</h1>

            <DataRequestForm onDataRequest={onDataRequest}/>
            <ExchangeData ticker={stockTicker}/>
        </div>
    );
}

App.propTypes = {
    stockTicker: PropTypes.object
};

const mapStateToProps = ({stockTicker}) => {
    return {stockTicker};
};

export default connect(mapStateToProps)(App);
