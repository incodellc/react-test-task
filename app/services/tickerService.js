import io from 'socket.io-client';

let socket = null;

export const connect = (store, stockSymbol) => {
    socket = io('http://localhost:4000');
    socket.on('connect', () => {
        console.log('connected');
        socket.on(stockSymbol, (data) => {
            store.dispatch({type: 'UPDATEDATA', data});
            console.log(data);
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};


