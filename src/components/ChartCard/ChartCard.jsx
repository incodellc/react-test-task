import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import moment from "moment";

const ChartCard = props => {
    const diff = props.difference;
    const borderColor = diff ? (diff > 0 ? "success" : "danger") : "dark";
    const bageVariant = diff > 0 ? "success" : "danger";
    const bageText = diff > 0 ? "+" + diff : diff;
    const bage = diff ? (
        <Badge className="ml-a" variant={bageVariant} data-test="chart-card__bage">
            {bageText}
        </Badge>
    ) : (
        ""
    );
    return (
        <Card className="mb-2 mt-2" data-test="chart-card" style={{ maxWidth: "500px" }} border={borderColor}>
            <Card.Header className="pb-1">
                <h5 className="d-flex justify-content-between align-items-center">
                    {props.ticker}
                    {bage}
                </h5>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>Price: {props.price}</Card.Title>
                    </Col>
                    <Col>
                        <Card.Text className="m-0">Change: {props.change} </Card.Text>
                        <Card.Text className="m-0">Dividend: {props.dividend} </Card.Text>
                        <Card.Text className="m-0">Yield: {props.yield} </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">
                Last trade time: {moment(props.last_trade_time).format("LLL")}{" "}
            </Card.Footer>
        </Card>
    );
};

export default ChartCard;
