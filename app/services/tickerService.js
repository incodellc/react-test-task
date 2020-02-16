import io from 'socket.io-client';

let socket = null;

export const connect = (stockSymbol, onRecieved) => {
    socket = io('http://localhost:4001');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, onRecieved);

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
