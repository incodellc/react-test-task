import io from 'socket.io-client';
import {store} from '../index';

let socket = null;

export const connect = () => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on('ticker1', (data) => {
            console.log(data);
            store.dispatch({type: 'SET_TICKER_DATA', payload: data});
        });
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

export const sendMessage = (stockSymbol, interval) => {
    socket.emit('ticker', stockSymbol, interval);
};


