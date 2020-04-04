import React from 'react';
import { useSelector } from 'react-redux';
import { getTickerData } from '../selectors';

const Price = () => {
    const tickerData = useSelector(getTickerData);
    console.log('my data:', tickerData);
    return (
<div>Hello</div>
  );
};

export default Price;
