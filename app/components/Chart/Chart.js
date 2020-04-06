import React, { PureComponent } from 'react';
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';


export class Chart extends PureComponent {
    render() {
        const { data } = this.props;
        const dataForChart = data.map(quote => ({
            name: quote.last_trade_time.match(/\d{2}:\d{2}:\d{2}/)[0],
            price: +quote.price,
        })).reverse();

        return (
            <div className="chart">
                <ResponsiveContainer>
                    <AreaChart
                        data={dataForChart}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#d31919"
                            fill="#be525288"
                            isAnimationActive={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
