import React from 'react';
import { useSelector } from 'react-redux';
import { priceSelector, yieldSelector } from './../../selectors/tickerServiceSelector';
import './Price.scss';
import classnames from 'classnames';

const Price = () => {
    const price = useSelector(priceSelector);
    const income = useSelector(yieldSelector);
    return (
        <div className="price__wrapper">
            <span>Price: {price}</span>
            <i className={classnames('material-icons', { up: income > 1, down: income <= 1 })} >{income > 1 ? 'trending_up' : 'trending_down'}</i>
        </div >
    );
};

export default Price;
