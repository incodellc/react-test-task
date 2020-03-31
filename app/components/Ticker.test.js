import React from 'react';
import { shallow } from 'enzyme';

import { configureStore } from '../store/configureStore';
import Ticker from './Ticker';

const store = configureStore();

describe('<Ticker />', () => {
  const ticker = shallow(<Ticker store={store} stockSymbol="AAPL"/>);

  it('rendered', () => {
    expect(ticker.length).toEqual(1);
    expect(ticker.name()).toEqual('Ticker');
  });
});
