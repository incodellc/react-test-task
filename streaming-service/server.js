'use strict';

////
// CONFIGURATION SETTINGS
////
const FETCH_INTERVAL = 5000;
const PRETTY_PRINT_JSON = true;

////
// START
////
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const utils = require('./utils/utils');


const getQuote = (socket, ticker) => {
    const quote = {};

    quote.ticker = ticker;
    quote.exchange = 'NASDAQ';
    quote.price = utils.getRandomValBetween(100, 300, 2);
    quote.change = utils.getRandomValBetween(0, 200, 2);
    quote.changePercent = utils.getRandomValBetween(0, 1, 2);
    quote.lastTradeTime = utils.getUTCDate();
    quote.dividend = utils.getRandomValBetween(0, 1, 2);
    quote.yield = utils.getRandomValBetween(0, 2, 2);

    socket.emit(ticker, PRETTY_PRINT_JSON ? JSON.stringify(quote, null, 4) : JSON.stringify(quote));
}

const trackTicker = (socket, ticker) => {
    console.log('track Ticker');

    getQuote(socket, ticker);

    const timer = (time = FETCH_INTERVAL) => {
        return setInterval(() => {
            getQuote(socket, ticker);
        }, time);
    }

    let timerInstance = timer();

    socket.on('setIntervalTime', (time) => {
        clearInterval(timerInstance);
        timerInstance = timer(time);
    });

    socket.on('disconnect', () => {
        clearInterval(timerInstance);
    });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = socketIO.listen(server);
io.set('origins', '*:*');

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
    socket.on('ticker', (ticker) => {
        trackTicker(socket, ticker);
    });
});

server.listen(process.env.PORT || 4000);
