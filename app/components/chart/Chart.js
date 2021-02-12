import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Chart = (props) => {
    const { stocks } = props;

    const data = {
        labels: stocks.map((elem) => {
            return new Date(elem.last_trade_time).toLocaleTimeString('ru-RU');
        }),
        datasets: [
            {
                label: 'Change percent',
                data: stocks.map((elem) => {
                    return +elem.change_percent;
                }),
                fill: false,
                backgroundColor: 'rgb(24, 144, 255)',
                borderColor: 'rgba(24, 144, 255, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>

    );
};

Chart.propTypes = {
    stocks: PropTypes.array.isRequired,
};

export { Chart };
