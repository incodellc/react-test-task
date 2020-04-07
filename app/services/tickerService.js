import io from 'socket.io-client';

let socket = null;

export const initTickerService = (stockSymbol, updateStockPriceAction) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, tickerData => {
            updateStockPriceAction(
                JSON.parse(tickerData)
            );
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
