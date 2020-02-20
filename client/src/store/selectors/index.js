import { createSelector } from 'reselect';
import { sortByKey } from '../../utils';

export const isConnectingSelector = createSelector(state => state.connecting, connecting => connecting);
export const isConnectedSelector = createSelector(state => state.connected, connected => connected);
export const fieldsSelector = createSelector(state => state.fields, fields => fields);
export const tickersSelector = createSelector(state => state.tickers, tickers => tickers);
export const actualHistoryLengthSelector = createSelector(state => state.quotes.length, actualHistoryLength => actualHistoryLength);
export const historyLengthSelector = createSelector(state => state.historyLength, historyLength => historyLength);
export const historyLengthOptionsSelector = createSelector(state => state.historyLengthOptions, historyLengthOptions => historyLengthOptions);
export const sortParamsSelector = createSelector(state => state.sortParams, sortParams => sortParams);

export const isTickerBannedSelector = createSelector(
    state => state.bannedTickerIds,
    (_, tickerId) => tickerId,
    (bannedTickerIds, tickerId) => bannedTickerIds.includes(tickerId)
);

export const lastQuoteByTickerSelector = createSelector(
    state => state.quotes,
    (_, tickerId) => tickerId,
    (quotes, tickerId) => quotes.find(({ ticker }) => ticker === tickerId)
);

export const displayedQuotesSelector = createSelector(
    state => state.quotes,
    state => state.sortParams,
    state => state.bannedTickerIds,
    (quotes, sortParams, bannedTickerIds) => sortByKey(quotes, sortParams).filter(({ ticker }) => !bannedTickerIds.includes(ticker))
);