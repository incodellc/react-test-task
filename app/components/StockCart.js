import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import ChangeDisplay from './ChangeDisplay';

const StockCart = () => {
    const { data, error, tickSymbol, deleyTime } = useSelector(state => state.stockTicker);
    const [prevTickInfo, setPrevTickInfo] = useState(null);
    const [tickInfo, setTickInfo] = useState(null);

    useEffect(() => {
        setPrevTickInfo(data[0]);
        data.length > 1 && setTickInfo(data[1]);
    }, [data]);

    useEffect(() => {
        setPrevTickInfo(null);
        setTickInfo(null);
    }, [tickSymbol, deleyTime]);

    return (
        <div className="stock-cart">
            {error && <div className="card-error" data-testid="card-error">Something goes wrong: {error}</div>}
            {!tickInfo && <div className="card-loading" data-testid="card-loading">Loading...</div>}
            {tickInfo &&
                <ul data-testid="card-info">
                    <li>Ticker: {tickInfo.ticker}</li>
                    <li>Exchange: {tickInfo.exchange}</li>
                    <li>
                        <span>Price: {tickInfo.price}</span>
                        <ChangeDisplay preValue={prevTickInfo?.price} actualValue={tickInfo?.price} />
                    </li>
                    <li>
                        <span>Change: {tickInfo.change}</span>
                        <ChangeDisplay preValue={prevTickInfo?.change} actualValue={tickInfo?.change} />
                    </li>
                    <li>
                        <span>Change Percent: {tickInfo.change_percent}</span>
                        <ChangeDisplay preValue={prevTickInfo?.change_percent} actualValue={tickInfo?.change_percent} />
                    </li>
                    <li>
                        <span>Dividend: {tickInfo.dividend}</span>
                        <ChangeDisplay preValue={prevTickInfo?.dividend} actualValue={tickInfo?.dividend} />
                    </li>
                    <li>
                        <span>Yield: {tickInfo.yield}</span>
                        <ChangeDisplay preValue={prevTickInfo?.yield} actualValue={tickInfo?.yield} />
                    </li>
                    <li>Last Trade Time: {moment(tickInfo.last_trade_time).startOf('hour').fromNow()}</li>
                </ul> }
        </div>
    );
};

export default StockCart;
