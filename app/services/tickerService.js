import io from 'socket.io-client';


export let socket = null;


export const connect = (stockSymbol, cb) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');
        socket.on(stockSymbol, (data) => {
            cb(JSON.parse(data));
        });


        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => console.log('disconnected')
    );
};
