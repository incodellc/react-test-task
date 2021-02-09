import io from 'socket.io-client';
import { SOCKET_PATH } from '../constans';

let _socket = null;

export const socket = () => _socket || (_socket = io(SOCKET_PATH));

export const setInterval = (interval) => socket().emit('interval', interval);

export const connect = (stockName, interval, callback) => {
    socket().on('connect', () => {
        socket().emit('ticker', stockName, interval);
        socket().on(stockName, (stock) => callback(JSON.parse(stock)));
    });
};

export const disconnect = () => {
    _socket?.close();
    _socket = null;
};
