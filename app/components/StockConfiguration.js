import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleyTimeChange, breakConnection, stockSymbolChange } from '../actions';
import { changeConnectSymbol, connect } from '../services';

const StockConfiguration = () => {
    const dispatch = useDispatch();

    const [deleyTime, setDelayTime] = useState(5000);
    const [stockSymbol, setStockSymbol] = useState('AAPL');

    const handleChangeConfig = (e) => {
        e.preventDefault();
        dispatch(deleyTimeChange(deleyTime));
        dispatch(stockSymbolChange(stockSymbol));
        breakConnection(dispatch);
        changeConnectSymbol(dispatch, stockSymbol);
    };

    useEffect(() => {
        connect(dispatch, stockSymbol);
    }, []);

    return (
        <div className="stock-configuration">
            <form onSubmit={(e) => handleChangeConfig(e)}>
                <select value={deleyTime} className="select-time" data-testid="select-time" onChange={(e) => setDelayTime(e.target.value)}>
                    <option value={500}>0.5 sec</option>
                    <option value={2000}>2 sec</option>
                    <option value={5000}>5 sec</option>
                    <option value={10000}>10 sec</option>
                </select>
                <input type="text" value={stockSymbol} className="symbol-input" data-testid="symbol-input" onChange={(e) => setStockSymbol(e.target.value)} />
                <button type="submit" data-testid="change-submit">Submit</button>
            </form>
        </div>
    );
};

export default StockConfiguration;
