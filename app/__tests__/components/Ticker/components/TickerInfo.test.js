import React from 'react';
import { screen, render } from '@testing-library/react';
import TickerInfo from '../../../../components/Ticker/components/TickerInfo';

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

describe('<TickerInfo />', () => {
  test('should renders without crashing', () => {
    render(<TickerInfo tickerData={[mockData]} />);
    expect(screen.getByTestId('ticker-info'));
    expect(screen.getByTestId('ticker-info-title')).toHaveTextContent(
      mockData.ticker
    );
    expect(screen.getByTestId('ticker-info-exchange')).toHaveTextContent(
      mockData.exchange
    );
    expect(screen.getByTestId('ticker-info-list'));
    expect(screen.queryAllByTestId('ticker-info-list-item')).toHaveLength(5);
    expect(screen.getByTestId('ticker-info-date'));
  });
});
