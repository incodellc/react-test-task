import io from 'socket.io-client';
import { store } from '../';
import { updateTickerData } from '../modules/Tickers/actions';

export const connect = (stockSymbol) => {
  const socket = io('http://localhost:4000');

  socket.on('connect', () => {
    console.log(`connected ${stockSymbol}`);

    socket.on(stockSymbol, (response) => {
      const data = JSON.parse(response);
      store.dispatch(updateTickerData({ name: data.ticker, data }));
    });

    socket.emit('ticker', stockSymbol);
  });

  socket.on('disconnect', () => {
    console.log(`disconnected ${stockSymbol}`);
  });

  return socket;
};
