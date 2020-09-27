import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { connectNode } from '../services';

function Ticker(props) {
    const [tickerName, setTickerName] = useState('GOOG');
    const [refreshTime, setRefreshTime] = useState('5000');
    const [disabled, setDisabled] = useState(false);
    const { ticker } = props;

    const submit = (e) => {
        e.preventDefault();
        setDisabled(true);
        connectNode(tickerName, Number(refreshTime));
    };

    const textColor = () => {
        if (ticker.change > 0) return 'green';
        else if (ticker.change < 0) return 'red';
        return 'grey';
    };

    const priceStyle = () => {
        if (Number(refreshTime) <= 5000) {
            return {
                animation: `color${textColor()} ${(
                    Number(refreshTime) / 1000
                ).toString()}s infinite`,
            };
        }
        return { color: textColor() };
    };

    const lastUpdateTime = () => {
        return new Date(Date.parse(ticker.last_trade_time)).toGMTString();
    };

    return (
        <div>
            <form onSubmit={submit} className={'ticker-form'}>
                <select
                    value={refreshTime}
                    onChange={(e) => setRefreshTime(e.target.value)}
                    className={'ticker-select'}
                >
                    <option value={500}>0.5sec</option>
                    <option value={1000}>1sec</option>
                    <option value={5000}>5sec</option>
                    <option value={10000}>10sec</option>
                    <option value={30000}>30sec</option>
                </select>
                <input
                    value={tickerName}
                    onChange={(e) => setTickerName(e.target.value)}
                    placeholder={'Input ticker'}
                    className={'ticker-input'}
                />
                <button
                    className={`ticker-submit ${disabled ? 'disabled' : null}`}
                    disabled={disabled}
                    type={'submit'}
                >
                    Add Ticker
                </button>
            </form>

            <p className={'ticker'}>
                {ticker.ticker} <span style={priceStyle()}>{ticker.price}</span>{' '}
                <span className={'cur'}>USD</span>{' '}
                <span className={'change'} style={{ color: textColor() }}>
                    {ticker.change > 0 ? `+${ticker.change}` : ticker.change} (
                    {ticker.change_percent}%){' '}
                    {textColor() === 'green' ? (
                        <i className={'fas fa-arrow-up'}></i>
                    ) : (<i className={'fas fa-arrow-down'}></i>)}
                </span>
                <span className={'last-update'}>
                    Last Update {ticker.last_trade_time ? lastUpdateTime() : null}
                </span>
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ticker: state.stockTicker,
    };
};

export default connect(mapStateToProps)(Ticker);

Ticker.propTypes = {
    ticker: PropTypes.object.isRequired,
};
