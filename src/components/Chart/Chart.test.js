import React from "react";
import { shallow } from "enzyme";
import Chart from "./Chart";

const testState = {
    data: {
        ticker: "AAPL",
        exchange: "NASDAQ",
        price: "116.60",
        change: "-0.46",
        change_percent: "-0.39",
        last_trade_time: new Date(),
        dividend: "0.57",
        difference: -2,
        yield: "1.96"
    },
    history: [
        {
            ticker: "AAPL",
            exchange: "NASDAQ",
            price: "116.60",
            change: "-0.46",
            change_percent: "-0.39",
            last_trade_time: new Date(),
            dividend: "0.57",
            difference: -2,
            yield: "1.96"
        },
        {
            ticker: "AAPL",
            exchange: "NASDAQ",
            price: "116.60",
            change: "-0.46",
            change_percent: "-0.39",
            last_trade_time: new Date(),
            dividend: "0.57",
            difference: -2,
            yield: "1.96"
        }
    ],
    historyLength: 10,
};

const setUpComponent = props => {
    const component = shallow(<Chart {...props} />);
    return component;
};

describe("Chart component", () => {
    it("Component should render", () => {
        const wrapper = setUpComponent(testState).find('[data-test="chart"]');
        const chartCard = setUpComponent(testState).find('[data-test="chart-card"]')
        expect(wrapper.length).toBe(1);
        expect(chartCard.length).toBe(testState.history.length)
    });
});
