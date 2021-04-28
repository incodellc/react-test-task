import '../styles/application.scss';
import { connect } from '../services';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleyTimeChange } from '../actions';

function App() {
    const dispatch = useDispatch();

    const { stock } = useSelector(state => state.stockTicker);

    useEffect(() => {
        console.log('123');
        console.log(stock);
    }, []);

    const handleOpenConnection = () => {
        connect(dispatch, stock);
    };

    return (
        <div className="stock-ticker">
            <button onClick={() => dispatch(deleyTimeChange(1000))}>Change Time</button>
            <h1 onClick={handleOpenConnection}>Stock Blotter</h1>
        </div>
    );
}

export default App;
