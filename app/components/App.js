import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { connect, disconnect } from '../services/tickerService';
import { Button, Spin, PageHeader, Select } from 'antd';

import { stockList } from '../data';

import { resetHistory } from '../storage/stock/history/actions';
import { clearData } from '../storage/stock/ticker/actions';

import StockInfo from './stock-info';
import StockChart from './stock-chart';
import StockTable from './stock-table';

export const App = () => {
    const dispatch = useDispatch();

    const [currentStock, setCurrentStock] = useState('APPL');
    const [isConnect, setIsConnect] = useState(false);
    const [prevPrice, setPrevPrice] = useState(0);
    const [positiveChange, setPositiveChange] = useState(null);
    const [stopConnection, setStopConnection] = useState(false);

    const {
        stock,
        stock: { price },
    } = useSelector((state) => state.stockTicker);

    const { history } = useSelector((state) => state.stockHistory);

    useEffect(() => {
        if (prevPrice < price) setPositiveChange(true);
        else setPositiveChange(false);

        setPrevPrice(price);
    }, [price]);

    const handleConnect = () => {
        connect(currentStock);
        setIsConnect(true);
        setStopConnection(false);
    };

    const handleReset = () => {
        dispatch(resetHistory());

        if (stopConnection) {
            setStopConnection(false);
            connect(currentStock);
        }
    };

    const handleStop = () => {
        disconnect();
        setStopConnection(true);
    };

    const handleClear = () => {
        setStopConnection(true);
        setIsConnect(false);
        disconnect();
        dispatch(clearData());
    };

    const stockRender = (
        <div className="stock-ticker" label="stock ticker">
            <div className="info">
                <StockInfo
                    stockData={stock}
                    isChangePositive={positiveChange}
                />
                <StockChart
                    isPositive={positiveChange}
                    stockHistory={history}
                />
            </div>
            <div className="table">
                <StockTable stockHistory={history} />
            </div>
        </div>
    );

    let controlButtons;
    if (isConnect) {
        controlButtons = (
            <>
                <Button onClick={handleClear}>Clear</Button>
                <Button type="primary" onClick={handleReset}>
                    Reset
                </Button>
                <Button type="primary" onClick={handleStop} danger>
                    Stop
                </Button>
            </>
        );
    } else {
        controlButtons = (
            <>
                <Select defaultValue={'APPL'} onChange={setCurrentStock}>
                    {stockList.map(({ company, abbr }) => (
                        <Select.Option key={abbr} value={abbr}>
                            {company}
                        </Select.Option>
                    ))}
                </Select>
                <Button onClick={handleConnect}>Connect</Button>
            </>
        );
    }

    return (
        <div className="app">
            <PageHeader title={<h1>Stock Blotter</h1>} extra={controlButtons} />
            {isConnect &&
                (history.length === 0 ? <Spin label="spin" /> : stockRender)}
        </div>
    );
};
