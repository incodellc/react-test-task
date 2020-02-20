import React from 'react';
import { renderWithRedux } from '../../../utils/test-utils';
import { TickerList } from '../../../components';
import { cleanup } from '@testing-library/react';

describe('Check TickerList component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<TickerList />);
        expect(asFragment()).toMatchSnapshot();
    });
    
    it('component should contain correct number of TickerListItem comp-s', () => {
        const { getByTestId, getAllByTestId, store } = renderWithRedux(<TickerList />);
        expect(getByTestId('ticker-list')).toContainElement(getAllByTestId('ticker-list-item')[0]);
        expect(getAllByTestId('ticker-list-item').length).toEqual(store.getState().tickers.length);
    });
});