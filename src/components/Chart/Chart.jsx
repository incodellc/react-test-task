import React from "react";
import { Container } from "react-bootstrap";
import { CSSTransitionGroup } from "react-transition-group";
import ChartCard from "../ChartCard";
import "./Chart.css";

const Chart = props => {
    const list = () => {
        const arr = props.history.map(item => <ChartCard {...item} key={item.price + "-key"} data-test="chart-card"/>);
        return arr.reverse();
    };

    return (
        <Container data-test="chart">
            <CSSTransitionGroup transitionName="chart" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                {list()}
            </CSSTransitionGroup>
        </Container>
    );
};

export default Chart;