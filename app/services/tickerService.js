import io from 'socket.io-client';
import {getTicker} from '../actions';

let socket = null;

export const connect = (stockSymbol) => (dispatch) => {
    socket = io(`http://localhost:4000/#${stockSymbol}`);

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            console.log(data);
            dispatch(getTicker(data));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
