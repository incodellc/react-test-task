import React from 'react';
import { initState } from '../../../store/reducer';
import { quotesExample } from '../../../utils'
import { renderWithRedux } from '../../../utils/test-utils';
import { QuotesGrid } from '../../../components';
import { cleanup } from '@testing-library/react';

describe('Check QuotesGrid component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<QuotesGrid />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should contain number of QuoteRow comp-s equals to all quotes', () => {
        const { getByTestId, getAllByTestId, store } = renderWithRedux(<QuotesGrid />);
        expect(getByTestId('quotes-grid')).toContainElement(getAllByTestId('quote-row')[0]);
        expect(getAllByTestId('quote-row').length).toEqual(store.getState().quotes.length);
    });

    it('component should contain number of QuoteRow comp-s equals to all quotes except two', () => {
        const state = { ...initState, quotes: quotesExample.slice(), bannedTickerIds: ['AAPL', 'EBAY'] };
        const { getAllByTestId, store } = renderWithRedux(<QuotesGrid />, state);
        expect(getAllByTestId('quote-row').length).toEqual(store.getState().quotes.length - 2);
    });

    it('component should be empty', () => {
        const state = { ...initState, quotes: [] };
        const { queryAllByTestId } = renderWithRedux(<QuotesGrid />, state);
        expect(queryAllByTestId('quote-row').length).toEqual(0);
    });
});