import React from 'react';
import { useDispatch } from 'react-redux';
import { setInterval } from '../../actions/tickers';

const Delay = () => {
    const dispatch = useDispatch();

    const onIntervalHandler = (event) => {
        dispatch(setInterval(event.target.value * 1000));
    };

    return (
        <select className="delay__select" onChange={onIntervalHandler}>
            <option value="1">1 SEC</option>
            <option value="30">30 SEC</option>
            <option value="60">1 MIN</option>
        </select>
    );
};

export default Delay;
