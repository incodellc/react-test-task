import '../styles/application.scss';
import {connect, sendMessage} from '../services';
import React, {useState, useMemo, useRef, useEffect} from 'react';
import { Chart } from 'react-charts';

import {useSelector} from 'react-redux';

// The below line is here as an example of getting prices
connect();

const App = () => {
    const [input, setInput] = useState('');
    const [newArr, setNewArr] = useState([[0, 0]]);
    const [interval, setInterval] = useState(5);
    const data = useSelector((state) => state.stockTicker);
    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    const i = useRef(0);
    useEffect(() => {
        if(data.price) {
            setNewArr((prevState) => {
                i.current += interval;
                return [...prevState, [i.current, Number(data.price)]];
            });
        }
    }, [data]);
    const buttonHandler = () => {
        sendMessage(input, interval);
        setNewArr([[0, 0]]);
        i.current = 0;
    };
    const axes = useMemo(
        () => {
            return  [
                {primary: true, type: 'linear', position: 'bottom'},
                {type: 'linear', position: 'left'}
            ];
        }, []
    );
    return (
        <div className="stock-ticker">
            <h1>Stock Blotter</h1>
            <div
                style={{
                    width: '400px',
                    height: '300px'
                }}
            >
                <Chart data={[{label: `${data?.ticker} - price`, data: newArr}]} axes={axes} tooltip />
            </div>
            <div>
                <input placeholder="Enter your ticker" type="text" value={input} onChange={changeHandler}/>
                <button onClick={buttonHandler}>Request data</button>
            </div>
            <div>
                <input placeholder="Interval in sec" type="number" onChange={(e) => setInterval(Number(e.target.value))}/>
                <button onClick={buttonHandler}>Change interval</button>
            </div>
            <p>Ticker name: {data?.ticker}</p>
            <p>Exchange: {data?.exchange}</p>
            <p>Price: {data?.price}</p>
            <p>Change: {data?.change}</p>
            <p>Change %: {data?.change_percent}</p>
            <p>Last trade time: {data?.last_trade_time}</p>
            <p>Dividend: {data?.dividend}</p>
            <p>Yield: {data?.yield}</p>
        </div>
    );
};

export default App;
