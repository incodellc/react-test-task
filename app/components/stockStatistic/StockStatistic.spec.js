import React from 'react';
import { StockStatistic } from './StockStatistic';
import { Statistic } from 'antd';

const setUp = (props) => shallow(<StockStatistic {...props} />);

const props = {
    lastChange: '0,78',
    secondLastChange: '0,52',
};

const reverseProps = {
    lastChange: '0,15',
    secondLastChange: '0,42',
};

describe('should render StockStatistic component', () => {
    it('should contain Statistic as a child component', () => {
        const childComponent = setUp(props).find(Statistic);
        expect(childComponent).toHaveLength(1);
    });

    describe('StockStatistic component with props', () => {
        it('lastChange > secondLastChange', () => {
            const childComponent = setUp(props).find(Statistic);
            expect(childComponent.props().valueStyle).toHaveProperty('color', '#3f8600');
        });

        it('lastChange < secondLastChange', () => {
            const childComponent = setUp(reverseProps).find(Statistic);
            expect(childComponent.props().valueStyle).toHaveProperty('color', '#cf1322');
        });
    });
});
