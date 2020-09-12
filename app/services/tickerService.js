import io from 'socket.io-client';

let socket = null;

export const connect = (stockSymbol, cb) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');
        socket.on(stockSymbol, (data) => {
            cb(data);
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
