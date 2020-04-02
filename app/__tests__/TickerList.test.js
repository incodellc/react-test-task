import React from 'react'
import { shallow } from 'enzyme'
import TickerList from '../components/TickerList/TickerList';

describe('TickerList test', () => {
    const props = {
        tickers: [
            {
                'ticker': 'AAPL',
                'exchange': 'NASDAQ',
                'price': '116.60',
                'change': '-0.46',
                'change_percent': '-0.39',
                'last_trade_time': 'Oct 21, 4:00PM EDT',
                'dividend': '0.57',
                'yield': '1.96'
            },
            {
                'ticker': 'AAPL',
                'exchange': 'NASDAQ',
                'price': '16.60',
                'change': '-0.36',
                'change_percent': '-0.29',
                'last_trade_time': 'Oct 21, 3:00PM EDT',
                'dividend': '0.55',
                'yield': '1.01'
            }
        ],
    };
    const tickerList = shallow(<TickerList {...props} />);

    it('should renders properly', () => {
        expect(tickerList).toMatchSnapshot();
    });

    it('should renders 9 table-heads (<th>)', () => {
        expect(tickerList.find('th')).toHaveLength(9);
    });

    it('should renders 2 tickers', () => {
        expect(tickerList.find('Ticker')).toHaveLength(2);
    });
});
