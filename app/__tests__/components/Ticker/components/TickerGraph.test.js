import React from 'react';
import { screen, render } from '@testing-library/react';
import TickerGraph from '../../../../components/Ticker/components/TickerGraph';

const mockData = {
  ticker: 'test',
  exchange: 'NASDAQ',
  price: '291.63',
  change: '171.70',
  change_percent: '0.72',
  last_trade_time: '2020-02-08T15:02:03.000Z',
  dividend: '0.55',
  yield: '1.51',
};

describe('<TickerGraph />', () => {
  test('should renders without crashing', () => {
    render(<TickerGraph tickerData={[mockData]} />);
    expect(screen.getByTestId('ticker-graph'));
  });
});
