import React from 'react';
import PropTypes from 'prop-types';

import {Ticker} from '../Ticker/Ticker';


const TickerList = ({tickers}) => {
    return (
        <div className="table-responsive-lg">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ticker</th>
                        <th scope="col">Exchange</th>
                        <th scope="col">Price</th>
                        <th scope="col">Change</th>
                        <th scope="col">Change percent</th>
                        <th scope="col">Last trade time</th>
                        <th scope="col">Dividend</th>
                        <th scope="col">Yield</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tickers.map((item, idx) => {
                        const isPositiveDynamic = !tickers[idx - 1] ? null : item.price >= tickers[idx - 1].price;
                        const className = isPositiveDynamic ? 'arrow-up' : 'arrow-down';
                        return(
                            <Ticker key={idx} id={idx + 1} item={item} className={className}/>
                        );
                    }).reverse()}
                    </tbody>
                </table>
            </div>
    );
};

TickerList.propTypes = {
    tickers: PropTypes.array.isRequired,
};

export default TickerList;

