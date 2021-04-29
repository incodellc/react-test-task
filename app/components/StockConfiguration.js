import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleyTimeChange } from '../actions';
import { changeConnectSymbol, connect } from '../services';

const StockConfiguration = () => {
    const dispatch = useDispatch();

    const [deleyTime, setDelayTime] = useState(5000);
    const [stockSymbol, setStockSymbol] = useState('AAPL');

    const handleChangeDelay = (e) => {
        e.preventDefault();
        dispatch(deleyTimeChange(deleyTime));
        changeConnectSymbol(dispatch, stockSymbol);
    };

    useEffect(() => {
        connect(dispatch, stockSymbol);
    }, []);

    return (
        <div className="stock-configuration">
            <h1>Choose reload time</h1>
            <form onSubmit={(e) => handleChangeDelay(e)}>
                <select onChange={(e) => setDelayTime(e.target.value)}>
                    <option value="500">0.5 sec</option>
                    <option value="2000">2 sec</option>
                    <option value="5000">5 sec</option>
                    <option value="10000">10 sec</option>
                </select>
                <input type="text" onChange={(e) => setStockSymbol(e.target.value)} placeholder="Enter stock symbol" />
                <button type="submit" data-testid="time-change-submit">Submit</button>
            </form>
        </div>
    );
};

export default StockConfiguration;
