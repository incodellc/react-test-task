import React from 'react';
import PropTypes from 'prop-types';
import '../styles/application.scss';
import cn from 'classnames';

const Price = ({tickerData, priceChanging}) => {
    if (!tickerData) {
        return null;
    }
    return (
          <div className="priceBlock">
            <div className="priceBlock-title">
              AAPL
            </div>

            <div
            className={cn('priceBlock-price',
              { 'price-positive': priceChanging === 'positive' },
              { 'price-negative': priceChanging === 'negative' },
              { 'price-neutral': priceChanging === 'neutral' }
            )}
            >
              {`$${tickerData.price}`}
            </div>

            <div className="priceBlock-row">
              <div className="priceBlock-element">{tickerData.change}</div>
              <div className="priceBlock-element">{`${tickerData.change_percent}%`}</div>
            </div>
        </div>
    );
};

Price.propTypes = {
    tickerData: PropTypes.object,
    priceChanging: PropTypes.string
};

export default Price;
