import io from 'socket.io-client';

export const tickerService = (tickers, connectCallback, resultCallback, disconnectCallback) => {
    const socket = io('/');

    socket.on('connect', () => {
        console.log('connected');
        connectCallback();

        for(let ticker of tickers) {
            socket.on(ticker.tickerId, (data) => {
                resultCallback(JSON.parse(data));
            });
            socket.emit('ticker', ticker.tickerId);
        }
    });

    socket.on('error', () => {
        socket.disconnect();
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
        disconnectCallback();
    });
};