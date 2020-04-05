import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { getTickerData, getPriceChanging} from '../selectors';
import '../styles/application.scss';
import cn from 'classnames';

const Price = () => {
    const tickerData = useSelector(getTickerData);
    const priceChanging = useSelector(getPriceChanging);

    return (
      <Fragment>
        {tickerData && (
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
        )
        }
      </Fragment>
    );
};

export default Price;
