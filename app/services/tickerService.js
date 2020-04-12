import io from 'socket.io-client';

let socket = null;
export const connect = (stockSymbol, stateChange) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');
        socket.on(stockSymbol, (data) => {
            console.log(data);
            stateChange(data);
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
