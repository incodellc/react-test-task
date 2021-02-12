'use strict';

////
// CONFIGURATION SETTINGS
////
var FETCH_INTERVAL = 5000;
var PRETTY_PRINT_JSON = true;

////
// START
////
var express = require('express');
var http = require('http');
var io = require('socket.io');
var cors = require('cors');

function getRandomValBetween(min, max, precision) {
    min = min === undefined ? 0 : min;
    max = max === undefined ? 9007199254740992 : max;
    precision = precision === undefined ? 0 : precision;

    var random = Math.random() * (max - min) + min;

    return random.toFixed(precision);
}

function getUTCDate() {
    var now = new Date();
    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
        now.getSeconds()
    );
}

function getQuote(socket, ticker) {
    var dataObj;

    var quote = {};
    quote.ticker = ticker;
    quote.exchange = 'NASDAQ';
    quote.price = getRandomValBetween(100, 300, 2);
    quote.change = getRandomValBetween(0, 200, 2);
    quote.change_percent = getRandomValBetween(0, 1, 2);
    quote.last_trade_time = getUTCDate();
    quote.dividend = getRandomValBetween(0, 1, 2);
    quote.yield = getRandomValBetween(0, 2, 2);

    socket.emit(
        ticker,
        PRETTY_PRINT_JSON
            ? JSON.stringify(quote, null, 4)
            : JSON.stringify(quote)
    );
}

function trackTicker(socket, ticker, interval) {
    console.log('track Ticker');

    // run the first time immediately
    getQuote(socket, ticker);

    const makeTimer = (interval) =>
        setInterval(function () {
            getQuote(socket, ticker);
        }, interval || FETCH_INTERVAL);

    // every N seconds
    var timer = makeTimer(interval);

    socket.on('interval', (newInterval) => {
        clearInterval(timer);
        timer = makeTimer(newInterval);
    });

    socket.on('disconnect', function () {
        clearInterval(timer);
    });
}

var app = express();
app.use(cors());
var server = http.createServer(app);

var io = io.listen(server);
io.set('origins', '*:*');

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.on('ticker', function (ticker, interval) {
        trackTicker(socket, ticker, interval);
    });
});

server.listen(process.env.PORT || 4000);
