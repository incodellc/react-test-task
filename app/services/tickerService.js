import io from 'socket.io-client';
import { createConnection, breakConnection } from '../actions/index';

let socket = null;

export const connect = (dispatch, stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        socket.on(stockSymbol, (data) => {
            const json = JSON.parse(data);
            dispatch(createConnection(json));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        dispatch(breakConnection());
    });
};

export const changeConnectSymbol = (dispatch, stockSymbol) => {
    socket.close();
    socket = null;
    dispatch(breakConnection());
    connect(dispatch, stockSymbol);
};
