import io from 'socket.io-client';
import {store} from '../index';

let socket = null;

export const tickerService = () => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on('initialTicker', (data) => {
            store.dispatch({
                type: 'SET_DATA',
                payload: data
            });
        });
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

export const requestData = (stockType, interval) => {
    socket.emit('ticker', stockType, interval);
};

