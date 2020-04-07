import React from 'react';
import { useSelector } from 'react-redux';
import { getTickerData, getPriceChanging} from '../selectors';
import Price from '../components/Price';

const PriceWrapper = () => {
    const tickerData = useSelector(getTickerData);
    const priceChanging = useSelector(getPriceChanging);

    return <Price tickerData={tickerData} priceChanging={priceChanging}/>;
};

export default PriceWrapper;
