import React from 'react';

// Components
import { StockCard } from './stock-card';

const rightProps = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '116.60',
    change: '-0.46',
    changePercent: '-0.39',
    time: '2021-02-07T21:36:46.537Z',
    dividend: '0.57',
    income: '1.96',
};
const setup = (props) => shallow(<StockCard {...props} />);

describe('StockCard change value test', () => {
    const getWrapper = (component) => component.find('.stock-card__change');

    it('should has class "down", if less 0', () => {
        const component = setup(rightProps);
        const wrapper = getWrapper(component);
        expect(wrapper.hasClass('down')).toBe(true);
    });

    it('should has class "up", if more 0', () => {
        const component = setup({ ...rightProps, change: '1' });
        const wrapper = getWrapper(component);
        expect(wrapper.hasClass('up')).toBe(true);
    });
});


