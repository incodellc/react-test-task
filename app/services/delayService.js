import io from 'socket.io-client';

let socket = null;

export const delayService = data => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        // console.log('connected delay');

        socket.emit('delay', data);
    });

    socket.on('disconnect', () => {
        // console.log('disconnected delay');
    });
};
