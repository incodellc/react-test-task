import io from 'socket.io-client';

let socket = null;

export const connect = (stockSymbol, setToState) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');
        socket.on(stockSymbol, (data) => {
            setToState(JSON.parse(data));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

export const changeDelay = (time) => {
    socket.emit('changeIntervalTime', time);
};

export const changeTicker = (stockSymbol, setToState, interval) => {
    socket.close();
    socket = null;
    connect(stockSymbol, setToState);
    changeDelay(interval);
};
