import io from 'socket.io-client';
import store from '../store';

let socket = null;

export const connect = stockSymbol => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, data => {
            console.log(data);
            store.dispatch({ type: 'UPDATE_PRICE', payload: JSON.parse(data) });
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
