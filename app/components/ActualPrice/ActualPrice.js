import React from 'react';
import { useSelector } from 'react-redux';
import './ActualPrice.scss';

import arrowDown from './arr1.svg';
import arrowUp from './arr2.svg';

const ActualPrice = () => {
    const data = useSelector(state => state.stockTicker.payload);
    const imageType = () => {
        switch (true) {
            case data.change < 0:
                return arrowDown;
            case data.change > 0:
                return arrowUp;
            default:
                return null;
        }
    };
    return (
        <section className="actual__price-block">
            <h1>Actual price:</h1>
            <div className="actual__price">
                <p data-testid="actual-price">{data.price}</p>
                {imageType() === null ? null : <img src={imageType()} alt="arrow" className="arrow" />}
            </div>
        </section>
    );
};

export default ActualPrice;

