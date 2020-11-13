import io from 'socket.io-client';
import { store } from '../index';
import setDataAction from '../actions/setDataAction';

let socket = null;

export const connectDataProvider = (stockSymbol) => {
    socket = io('http://localhost:4000');
    socket.on('connect', () => {
        console.log('connected');
        socket.on(stockSymbol, (data) => {
            const obj = JSON.parse(data);
            store.dispatch(setDataAction(obj));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

