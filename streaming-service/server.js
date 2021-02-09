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
const { func } = require('prop-types');

function getRandomValBetween(min, max, precision) {
    min = min === undefined ? 0 : min;
    max = max === undefined ? 9007199254740992 : max;
    precision = precision === undefined ? 0 : precision;

    var random = Math.random() * (max - min) + min;

    return random.toFixed(precision);
}

function getUTCDate() {
    // var now = new Date();
    // return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    return new Date().toISOString();
}

function getQuote(socket, ticker) {
    var quote = {
        ticker,
        exchange: 'NASDAQ',
        price: getRandomValBetween(100, 300, 2),
        change: getRandomValBetween(-50, 90, 2),
        last_trade_time: getUTCDate(),
        yield: getRandomValBetween(0, 2, 2),

        get change_percent() {
            return (this.change / this.price).toFixed(2);
        },
        get dividend() {
            return (this.price - this.change).toFixed(2);
        },
    };

    socket.emit(
        ticker,
        PRETTY_PRINT_JSON
            ? JSON.stringify(quote, null, 4)
            : JSON.stringify(quote)
    );
}

function trackTicker(socket, ticker, interval) {
    console.log(`track '${ticker}'`);

    const buildTicker = (time) =>
        setInterval(() => getQuote(socket, ticker), time || FETCH_INTERVAL);

    // run the first time immediately
    getQuote(socket, ticker);

    // every N seconds
    var timer = buildTicker(interval);

    socket.on('interval', (time) => {
        clearInterval(timer);
        timer = buildTicker(time);
    });

    socket.on('disconnect', () => {
        console.log(`<- close '${ticker}'`);
        clearInterval(timer)
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
