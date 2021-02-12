import React from 'react';
import { Chart } from './Chart';
import { Line } from 'react-chartjs-2';

const setUp = (props) => shallow(<Chart {...props} />);

const props = {
    stocks: [
        {
            ticker: "AAPL",
            exchange:"NASDAQ",
            price:"130.02",
            change:"35.44",
            change_percent:"0.53",
            last_trade_time:"2021-02-11T07:29:59.000Z",
            dividend:"0.89",
            yield: "1.70",
        },
        {
            ticker:"AAPL",
            exchange:"NASDAQ",
            price:"171.48",
            change:"85.80",
            change_percent:"0.37",
            last_trade_time:"2021-02-11T07:30:04.000Z",
            dividend:"0.92",
            yield:"1.60",
        },
        {
            ticker:"AAPL",
            exchange:"NASDAQ",
            price:"127.03",
            change:"147.08",
            change_percent:"0.94",
            last_trade_time:"2021-02-11T07:30:09.000Z",
            dividend:"0.63",
            yield:"0.36",
        },
    ]
};

describe('should render Chart component', () => {
    it('should contain Line as a child component', () => {
        const childComponent = setUp(props).find(Line);
        expect(childComponent).toHaveLength(1);
    });

    describe('Chart component with props', () => {
        it('Line component map and receive props', () => {
            const childComponent = setUp(props).find(Line);
            expect(childComponent.props().data.datasets[0].data).toHaveLength(3);
        });
    });
});