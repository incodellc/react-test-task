import io from 'socket.io-client';

class socketApi {
    socket = null;
    // initial time-interval
    stockInterval = 2000;
    // a connect with the server
    init() {
        this.socket = io('http://localhost:4000');
        this.socket.on('connect', () => {
            console.log('connected');
        });
    }
    // receiving data from the server
    handlePrice(stockSymbol, cb) {
        this.socket.on(stockSymbol, (data) => {
            const res = JSON.parse(data);
            console.log(res);
            cb(res);
        });
        this.socket.emit('changeTime', this.stockInterval);
        this.socket.emit('ticker', stockSymbol);
    }
    // set a new time interval on the server
    setTime(handleInterval) {
        this.socket.emit('disconnect', handleInterval);
        this.stockInterval = handleInterval;
        this.socket.emit('changeTime', this.stockInterval);
    }
}

export default new socketApi();
