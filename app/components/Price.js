import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { getTickerData } from '../selectors';

const Price = () => {
    const tickerData = useSelector(getTickerData);
    let parsedData;

    if (tickerData) {
        parsedData = JSON.parse(tickerData);
    }

    return (
      <Fragment>
        {parsedData && (
            <p>
              {parsedData.price}
            </p>
        )
        }
      </Fragment>
    );
};

export default Price;
