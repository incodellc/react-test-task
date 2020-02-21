import io from 'socket.io-client';

let socket = null;

export const connect = (stockSymbol, dispatch) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            // console.log(data);
            dispatch({type: 'LOAD_DATA', payload: JSON.parse(data)});
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

