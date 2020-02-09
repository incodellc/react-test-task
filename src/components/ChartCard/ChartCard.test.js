import React from "react";
import { shallow } from "enzyme";
import ChartCard from "./ChartCard";

const chartCard = `[data-test="chart-card"]`;
const chartCardBage = `[data-test="chart-card__bage"]`;

const defItem = {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: "116.60",
    change: "-0.46",
    change_percent: "-0.39",
    last_trade_time: new Date(),
    dividend: "0.57",
    difference: -2,
    yield: "1.96"
};

const itemDefFalse = { ...defItem, difference: false };
const itemGreaterThanZero = { ...defItem, difference: 1 };
const itemLessThanZero = { ...defItem, difference: -1 };

const bageVariants = {
    greaterThanZero: "success",
    lessThanZero: "danger"
};

const borderColors = {
    greaterThanZero: "success",
    lessThanZero: "danger",
    equalsFalse: "dark"
};

const setUpComponent = props => {
    const component = shallow(<ChartCard {...props} />);
    return component;
};

describe("Card component", () => {
    it("Component should render", () => {
        const wrapper = setUpComponent(defItem).find(chartCard);
        expect(wrapper.length).toBe(1);
    });

    describe("Bage", () => {
        it("Difference === false", () => {
            const wrapper = setUpComponent(itemDefFalse).find(chartCardBage);
            expect(wrapper.length).toBe(0);
        });

        it("Difference > 0", () => {
            const wrapper = setUpComponent(itemGreaterThanZero).find(chartCardBage);
            expect(wrapper.length).toBe(1);
            expect(wrapper.props().variant).toBe(bageVariants.greaterThanZero);
        });

        it("Difference < 0", () => {
            const wrapper = setUpComponent(itemLessThanZero).find(chartCardBage);
            expect(wrapper.length).toBe(1);
            expect(wrapper.props().variant).toBe(bageVariants.lessThanZero);
        });
    });

    describe("Border color", () => {
        it("Difference === false", () => {
            const wrapper = setUpComponent(itemDefFalse).find(chartCard);
            expect(wrapper.props().border).toBe(borderColors.equalsFalse);
        });

        it("Difference > 0", () => {
            const wrapper = setUpComponent(itemGreaterThanZero).find(chartCard);
            expect(wrapper.props().border).toBe(borderColors.greaterThanZero);
        });

        it("Difference < 0", () => {
            const wrapper = setUpComponent(itemLessThanZero).find(chartCard);
            expect(wrapper.props().border).toBe(borderColors.lessThanZero);
        });
    });
});
