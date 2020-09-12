import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import Arrow from './Arrow';


// eslint-disable-next-line react/prop-types
const Card = ({ticker, prevPrice})=> {
    console.log({ticker});
    return ticker ? (
    <div className="card-container">
        <div className="card-header">
            <div>
               Ticker: {ticker.ticker}
            </div>
            <div>
                Exchange: {ticker.exchange}
            </div>
            <div>
                Price: {ticker.price}  <Arrow current={ticker.price} prev={prevPrice}/>
            </div>
        </div>
        <div className="card-body">
            <div className="section">Change: {ticker.change}</div>
            <div className="section">Change(%): {ticker.change_percent}</div>
            <div className="section">Last trade time: {moment.utc(ticker.last_trade_time).startOf('day').fromNow()} </div>
            <div className="section">Dividend: {ticker.dividend}</div>
            <div className="section">Yield: {ticker.yield}</div>
        </div>
    </div>) : <p>Loading...</p>;
};


const mapStateProps = (state)=>({ticker: state.ticker, prevPrice: state.oldPrice});

export default connect(mapStateProps)(Card);

