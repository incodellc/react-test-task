import { quotesExample } from '../../utils';

export const tickerService = jest.fn((tickers, connectCallback, resultCallback, disconnectCallback) => {
    connectCallback();

    for(let ticker of tickers) {
        resultCallback(quotesExample.find(quote => quote.ticker === ticker.tickerId));
    }
});