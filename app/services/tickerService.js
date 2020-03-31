import io from 'socket.io-client';
import { updateData } from '../actions/actions';

let socket = null;

export const connect = (store, stockSymbol) => {
  socket = io('http://localhost:4000');

  socket.on('connect', () => {
    console.log('connected');

    socket.on(stockSymbol, (data) => {
      store.dispatch(updateData(data));
      console.log(data);
    });

    socket.emit('ticker', stockSymbol);
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
};
