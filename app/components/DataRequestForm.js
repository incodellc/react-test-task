import React, {useState} from 'react';
import PropTypes from 'prop-types';


function DataRequestForm({onDataRequest}) {
    const [stockSymbol, setStockType] = useState('');
    const [interval, setNewInterval] = useState('');

    const onStockChange = (e) => {
        setStockType(e.target.value);
    };

    const onIntervalChange = (e) => {
        setNewInterval(+(e.target.value));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onDataRequest(stockSymbol, interval);
        setStockType('');
        setNewInterval('');
    };


    return (
        <form>
            <input type="text" placeholder="Enter stock name/symbol" value={stockSymbol} onChange={onStockChange} />
            <input type="number" placeholder="Render interval/sec" value={interval} onChange={onIntervalChange} />
            <button type="submit" onClick={onSubmit}>Fetch data</button>
        </form>
    );
}

DataRequestForm.propTypes = {
    onDataRequest: PropTypes.func
};


export default DataRequestForm;
