import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

export const StockInfo = ({ stockData, isChangePositive }) => {
    const changeStatus = isChangePositive ? 'positive' : 'negative';

    return (
        <Card className="stock-info" title={<h2>Stock Info</h2>}>
            <div>
                <p className="ticker">{stockData.ticker}</p>
                <p className="exchange">{stockData.exchange}</p>
            </div>
            <div>
                <p className="price">$ {stockData.price}</p>
                <p className={`change ${changeStatus}`}>
                    {isChangePositive ? <RiseOutlined /> : <FallOutlined />}
                    {stockData.change_percent} %
                </p>
            </div>
        </Card>
    );
};

StockInfo.propTypes = {
    stockData: PropTypes.object.isRequired,
    isChangePositive: PropTypes.bool,
};
