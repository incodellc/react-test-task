import io from 'socket.io-client';

import { store } from '../storage';
import { setStock, closeConnection } from '../storage/stock/ticker/actions';

let socket = null;

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            const json = JSON.parse(data);

            store.dispatch(setStock(json));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
        store.dispatch(closeConnection());
    });
};

export const disconnect = () => {
    socket.disconnect();
};
