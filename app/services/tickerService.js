import io from 'socket.io-client';
// import { store } from '../index';

let socket = null;

export const connect = (stockSymbol, cb) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            // console.log(data);
            // console.log(cb);
            cb(JSON.parse(data));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
