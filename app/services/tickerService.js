import io from 'socket.io-client';
import newTicker from '../store/action/action';

let socket = null;

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            console.log(data);
            newTicker(data);
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
