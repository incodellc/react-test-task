import React from 'react';
import T from 'prop-types';
import Trend from 'react-trend';
import '../../../../styles/priceListView.scss';


function PriceList({ list, chartData }) {
    return (
    <div>
        <div className="stock-ticer_price">
            <div>Ticker: {list.ticker}</div>
            <div>Exchange: {list.exchange}</div>
            <div>Price: {list.price}</div>
            <div>Change: {list.change}</div>
            <div>Percent: {list.change_percent}</div>
            <div>Last trade: {list.last_trade_time}</div>
            <div>Dividend: {list.dividend}</div>
            <div>Yield: {list.yield}</div>
        </div>
        <div>
            <Trend autoDraw
            autoDrawDuration={3000}
            autoDrawEasing="ease-out"
            data={chartData}
            gradient={['#00c6ff', '#F0F', '#FF0']}
            radius={10}
            strokeWidth={1}
            strokeLinecap={'butt'}
            />
        </div>
    </div>
    );
}

export default PriceList;
PriceList.propTypes = {
    list: T.object.isRequired,
    chartData: T.array,
};
