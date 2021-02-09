import React from 'react';
import PropTypes from 'prop-types';

// or we can use Styled Components package for unique class name convention
import './style.scss';

export const StockCard = (props) => {
    const {
        ticker,
        exchange,
        price,
        change,
        dividend,
        changePercent,
        time,
        income,
    } = props;

    const changeColor = change > 0 ? 'up' : 'down';

    return (
        <div className="stock-card__container">
            <div className="stock-card__info">
                <p className="stock-card__name">{ticker}</p>
                <p className="stock-card__exchange">{exchange}</p>
                <p className="stock-card__time">
                    {new Date(time).toLocaleString()}
                </p>
            </div>
            <div className="stock-card__data">
                <p className="stock-card__price">{price}</p>
                <p className={`stock-card__change ${changeColor}`}>
                    {change} | {changePercent}%
                </p>
                <p className="stock-card__details">{dividend} Devidend</p>
                <p className="stock-card__details">{income} Incomed</p>
            </div>
        </div>
    );
};

StockCard.propTypes = {
    ticker: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    changePercent: PropTypes.string.isRequired,
    dividend: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    income: PropTypes.string.isRequired,
};
