import React from 'react';
import { StockCard } from './StockCard';
import { Card } from 'antd';

const setUp = (props) => shallow(<StockCard {...props} />);

const props = {
    lastStock: {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: '116.60',
        change: '-0.46',
        change_percent: '-0.39',
        last_trade_time: '2021-02-11T06:59:04.000Z',
        dividend: '0.57',
        yield: '1.96'
    },
    secondLastChange: '0.95',
    onIntervalChange: () => {}
};

describe('should render StockCard component', () => {
    it('should contain Card as a child component', () => {
        const childComponent = setUp(props).find(Card);
        expect(childComponent).toHaveLength(1);
    });

    describe('StockCard component with props', () => {
        it('Test props antd component', () => {
            const childComponent = setUp(props).find(Card.Meta);
            expect(childComponent.props().description.props.children[0].props.children[1]).toBe(props.lastStock.exchange);
        });
    });
});
