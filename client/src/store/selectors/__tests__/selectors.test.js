import moment from 'moment';
import {
    isConnectingSelector,
    isConnectedSelector,
    fieldsSelector,
    tickersSelector,
    actualHistoryLengthSelector,
    historyLengthSelector,
    historyLengthOptionsSelector,
    sortParamsSelector,
    isTickerBannedSelector,
    lastQuoteByTickerSelector,
    displayedQuotesSelector
} from '../';
import { quotesExample, fields, tickers, historyLengthOptions } from '../../../utils';
import { initState } from '../../reducer';

describe('Check selectors', () => {
    const mockState = { ...initState, quotes: [...quotesExample], bannedTickerIds: ['GOOGL'] }

    it('Check isConnectingSelector', () => {
        expect(isConnectingSelector(mockState)).toEqual(true);
    });
    it('Check isConnectedSelector', () => {
        expect(isConnectedSelector(mockState)).toEqual(false);
    });
    it('Check fieldsSelector', () => {
        expect(fieldsSelector(mockState)).toEqual(expect.arrayContaining(fields));
    });
    it('Check tickersSelector', () => {
        expect(tickersSelector(mockState)).toEqual(expect.arrayContaining(tickers));
    });
    it('Check actualHistoryLengthSelector', () => {
        expect(actualHistoryLengthSelector(mockState)).toEqual(mockState.quotes.length);
    });
    it('Check historyLengthSelector', () => {
        expect(historyLengthSelector(mockState)).toEqual(100);
    });
    it('Check historyLengthOptionsSelector', () => {
        expect(historyLengthOptionsSelector(mockState)).toEqual(expect.arrayContaining(historyLengthOptions));
    });
    it('Check sortParamsSelector', () => {
        expect(sortParamsSelector(mockState)).toEqual(expect.objectContaining(mockState.sortParams));
    });
    it('Check isTickerBannedSelector', () => {
        expect(isTickerBannedSelector(mockState, 'GOOGL')).toEqual(true);
        expect(isTickerBannedSelector(mockState, 'GOOGL+')).toEqual(false);
        expect(isTickerBannedSelector({ ...mockState, bannedTickerIds: [] }, 'GOOGL')).toEqual(false);
    });
    it('Check lastQuoteByTickerSelector', () => {
        const updatedMockState = { 
            ...mockState, 
            quotes: [
                ...quotesExample, 
                { 
                    ...quotesExample[0], 
                    price: '400.00'
                }
            ]
        };
        let lastQuotePrice = lastQuoteByTickerSelector(updatedMockState, 'AAPL').price;
        let firstQuotePrice = updatedMockState.quotes[updatedMockState.quotes.length - 1].price;
        expect(lastQuotePrice !== firstQuotePrice).toBeTruthy();
    });
    it('Check displayedQuotesSelector', () => {
        expect(displayedQuotesSelector(mockState).length).toEqual(9);
        expect(displayedQuotesSelector(mockState).findIndex(quote => quote.ticker === 'GOOGL')).toEqual(-1);
    });
});