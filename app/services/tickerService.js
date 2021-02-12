import io from 'socket.io-client';

let socket = null;

export const setStockInterval = (interval) => socket.emit('interval', interval);

export const connect = (stockSymbol, interval, cb) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            console.log(data);
            cb(JSON.parse(data));
        });

        socket.emit('ticker', stockSymbol, interval);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
