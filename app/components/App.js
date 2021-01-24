import React from 'react';
import { useDispatch } from 'react-redux';
import { setStockTicker } from '../action/stockTicker';
import { connect } from '../services';
import '../styles/application.scss';
import Delay from './Delay/Delay';
import Details from './Details/Details';
import Price from './Price/Price';

const App = () => {
    const dispatch = useDispatch();
    const stockTicker = (data) => {
        dispatch(setStockTicker(data));
    };

    connect('AAPL', stockTicker);

    return (
        <div className="stock-ticker">
            <div className="app">
                <h3 className="app__title">Stock Ticker</h3>
                <div className="app__price" ><Price /></div>
                <div className="app__delay"><Delay intervals={[1000, 2000, 5000, 7000, 10000]} /></div>
                <div className="app__details" ><Details /></div>
            </div>
        </div>
    );
};
export default App;
