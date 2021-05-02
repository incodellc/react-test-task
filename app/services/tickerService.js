import io from 'socket.io-client';

let socket = null;

export const connect = (stockSymbol, state) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            state(JSON.parse(data));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

export const setIntervalTime = (time) => {
    socket.emit('setIntervalTime', time);
};

