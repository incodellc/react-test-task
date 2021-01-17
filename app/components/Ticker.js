import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classNames';
import TickerContainer from '../hoc/TickerContainer';

const Ticker = props => {
    const { stockTicker: {data}, comparedNumericTicker, changeValueColor } = props;

    return (
        <div className="tickers">
            <div className="ticker">
                <h2 className="ticker__title">Ticker</h2>
                <p className="ticker__value">{data && data.ticker}</p>
            </div>
            <div className="ticker">
                <h2 className="ticker__title">Exchange</h2>
                <p className="ticker__value">{data && data.exchange}</p>
            </div>
            <div className="ticker">
                <h2 className="ticker__title">Price</h2>
                <p className={classNames('ticker__value', changeValueColor(comparedNumericTicker.price))}>{data && data.price}</p>
            </div>
            <div className="ticker">
                <h2 className="ticker__title">Change</h2>
                <p className={classNames('ticker__value', changeValueColor(comparedNumericTicker.change))}>{data && data.change}</p>
            </div>
            <div className="ticker">
                <h2 className="ticker__title">Change percent</h2>
                <p className={classNames('ticker__value', changeValueColor(comparedNumericTicker.change_percent))}>{data && data.change_percent}</p>
            </div>
            <div className="ticker">
                <h2 className="ticker__title">Last trade time</h2>
                <p className="ticker__value">{data && moment(data.last_trade_time).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div className="ticker">
                <h2 className="ticker__title">Dividend</h2>
                <p className={classNames('ticker__value', changeValueColor(comparedNumericTicker.dividend))}>{data && data.dividend}</p>
            </div>
            <div className="ticker">
                <h2 className="ticker__title">Yield</h2>
                <p className={classNames('ticker__value', changeValueColor(comparedNumericTicker.yield))}>{data && data.yield}</p>
            </div>
        </div>
    );
};

Ticker.propTypes = {
    stockTicker: PropTypes.object,
    data: PropTypes.object,
    comparedNumericTicker: PropTypes.object,
    changeValueColor: PropTypes.func
};

export default TickerContainer(Ticker);

