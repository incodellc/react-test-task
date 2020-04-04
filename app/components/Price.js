import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { getTickerData } from '../selectors';
import '../styles/application.scss';

const Price = () => {
    const tickerData = useSelector(getTickerData);
    let parsedData;

    if (tickerData) {
        parsedData = JSON.parse(tickerData);
    }

    return (
      <Fragment>
        {parsedData && (
          <div className="priceBlock">
            <div className="priceBlock-title">
              AAPL
            </div>

            <div className="priceBlock-price">
              {`$${parsedData.price}`}
            </div>

            <div className="priceBlock-row">
              <div className="priceBlock-element">{parsedData.change}</div>
              <div className="priceBlock-element">{`${parsedData.change_percent}%`}</div>
            </div>
        </div>
        )
        }
      </Fragment>
    );
};

export default Price;
