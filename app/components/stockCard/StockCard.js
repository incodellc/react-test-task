import React from 'react';
import { Card, Divider, Typography, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StockStatistic } from '../stockStatistic/StockStatistic';
import { IntervalSelector } from '../intervalSelector/IntervalSelector';

const { Text, Paragraph } = Typography;
const { Meta } = Card;

const StockCard = (props) => {
    const { lastStock: { ticker, exchange, price, change, change_percent: changePercent, last_trade_time: lastTradeTime, dividend, yield: stockYield },
        secondLastChange,
        onIntervalChange } = props;
    return (
        <Card
            actions={[
                <Row justify="space-around" align="middle" gutter={16}>
                    <Col>
                        <StockStatistic lastChange={changePercent} secondLastChange={secondLastChange} />
                    </Col>
                    <Col>
                        <IntervalSelector onIntervalChange={onIntervalChange}/>
                    </Col>
                </Row>
            ]}
        >
            <Meta
                title={
                    <div>
                        <Text type={'secondary'}>
                            {ticker}
                        </Text>
                        <Divider/>
                    </div>
                }
                description={
                    <div>
                        <Paragraph>
                            Exchange: {exchange}
                        </Paragraph>
                        <Paragraph>
                            Price: {price}$
                        </Paragraph>
                        <Paragraph>
                            Change: {change}$
                        </Paragraph>
                        <Paragraph>
                            Change percent:{Math.round(changePercent * 100)}%
                        </Paragraph>
                        <Paragraph>
                            Last trade time: {moment(lastTradeTime).format('MMMM Do YYYY, h:mm:ss a')}
                        </Paragraph>
                        <Paragraph>
                            Divident: {Math.round(dividend * 100)}%
                        </Paragraph>
                        <Paragraph>
                            Yield: {stockYield}
                        </Paragraph>
                    </div>
                }
            />
        </Card>
    );
};

StockCard.propTypes = {
    lastStock: PropTypes.object.isRequired,
    secondLastChange: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onIntervalChange: PropTypes.func.isRequired,
};

export { StockCard };
