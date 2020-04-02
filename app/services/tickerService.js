import io from 'socket.io-client';
import { store } from '../index';
import { getNewData } from '../actions/actions';
let socket = null;

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            console.log(data);
            store.dispatch(getNewData(JSON.parse(data)));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
