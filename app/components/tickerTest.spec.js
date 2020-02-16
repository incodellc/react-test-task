import Tickers from './tickerPrice';
import React from 'react';
import renderer from 'react-test-renderer';
it('отображается корректно', () => {
    const tree = renderer.create(<Tickers />).toJSON();
    expect(tree).toMatchSnapshot();
});
