import React from 'react'
import { shallow } from 'enzyme'
import { Ticker } from '../components/Ticker/Ticker';

describe('Ticker test', () => {
    const props = {
        id: 0,
        item: {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: 116.60,
            change: -0.46,
            change_percent: -0.39,
            last_trade_time: 'Oct 21, 4:00PM EDT',
            dividend: 0.57,
            yield: 1.96
        },
        className: 'arrow-up'
    };

    const ticker = shallow(<Ticker {...props} />);

    it('should renders properly', () => {
        expect(ticker).toMatchSnapshot();
    });

    it('should renders 8 table-data cells (<td>)', () => {
        expect(ticker.find('td')).toHaveLength(8);
    });

    it('should renders 1 table-head cells (<th>)', () => {
        expect(ticker.find('th')).toHaveLength(1);
    });
});

