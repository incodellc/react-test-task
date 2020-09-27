import io from 'socket.io-client';
import { setTicker } from '../store/actionCreators';

let socket = null;

export const connectNode = (stockSymbol, refreshTime) => {
    socket = io('http://localhost:4002');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            setTicker(JSON.parse(data));
        });

        socket.emit('ticker', { stockSymbol, refreshTime });
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
