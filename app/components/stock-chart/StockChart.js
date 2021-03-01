import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Line } from 'react-chartjs-2';

import { formatTime } from '../../utils';

export const StockChart = ({ stockHistory, isPositive }) => {
    const prices = stockHistory.map((stock) => Number(stock.price));
    const dates = stockHistory.map((stock) =>
        formatTime(stock.last_trade_time)
    );

    return (
        <Card title={<h2>Stock Price Change Chart</h2>} className="stock-chart">
            <Line
                data={{
                    labels: dates.reverse(),
                    datasets: [
                        {
                            data: prices.reverse(),
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: isPositive ? '#7cb305' : '#cf1322',
                            borderWidth: 3,
                            pointBackgroundColor: '#fff',
                            pointHoverBorderWidth: 6,
                        },
                    ],
                }}
                height={250}
                width={400}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    layout: {
                        padding: 10,
                    },
                    elements: {
                        point: {
                            radius: 4,
                            borderWidth: 2,
                        },
                    },
                }}
            />
        </Card>
    );
};

StockChart.propTypes = {
    stockHistory: PropTypes.array,
    isPositive: PropTypes.bool,
};
