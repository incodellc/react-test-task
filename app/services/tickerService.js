import io from 'socket.io-client';
import {updateDataFromService} from '../actions/index';
let socket = null;
import {store} from '../store/configureStore.dev';

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');
    const unsubscribe = store.subscribe(() => null);
    socket.on('connect', () => {
        console.log('connected');

        socket.emit('ticker', stockSymbol);
        socket.on(stockSymbol, (data) => {
            store.dispatch(updateDataFromService(JSON.parse(data)));
        });
    });
    socket.on('disconnect', () => {
        console.log('disconnected');
        unsubscribe();
    });
};
