import moment from 'moment';

const getRandomValBetween = (min, max) => {
    min = min === undefined ? 0 : min;
    max = max === undefined ? 9007199254740992 : max;
    let result = Math.random() * (max - min) + min;
    return result;
}

const quoteGen = (initQuotes) => {
    const prevQuotes = initQuotes;

    return (ticker, pretty) => {
        let index = prevQuotes.findIndex(prevQuote => prevQuote.ticker === ticker);
        let price = getRandomValBetween(200, 300);
        let change = getRandomValBetween(-50, 50);
        let changePercent = change / price;
        let lastTradeTime = moment().utc().format();
        let dividend = getRandomValBetween(0, 1);
        let yieldX = getRandomValBetween(0, 2);
        
        if (index > -1) {
            let newPrice = +prevQuotes[index].price + change;
            price = newPrice;
            changePercent = change / price
            if (newPrice <= 200 || newPrice >= 300) {
                price = +prevQuotes[index].price - change;
                changePercent = -1 * change / price
            }
        }

        const quote = {};
        quote.ticker = ticker;
        quote.exchange = 'NASDAQ';
        quote.price = price.toFixed(2);
        quote.change = change.toFixed(2);
        quote.change_percent = changePercent.toFixed(2);
        quote.last_trade_time = lastTradeTime;
        quote.dividend = dividend.toFixed(2);
        quote.yield = yieldX.toFixed(2);

        if (index > -1) {
            prevQuotes[index] = quote;
        } else {
            prevQuotes.push(quote);
        }

        return pretty ? JSON.stringify(quote, null, 4) : JSON.stringify(quote);
    };
}

const getQuote = quoteGen([]);
  
export const trackTicker = (socket, ticker, interval) => {
    console.log(`Track ticker: ${ticker}`);

    // run the first time immediately
    socket.emit(ticker, getQuote(ticker, true));

    // every N seconds
    const timer = setInterval(() => {
        socket.emit(ticker, getQuote(ticker, true));
    }, interval);
  
    socket.on('disconnect', () => {
        clearInterval(timer);
    });
}