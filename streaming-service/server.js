"use strict";

////
// CONFIGURATION SETTINGS
////
var FETCH_INTERVAL = 5000;
var PRETTY_PRINT_JSON = true;

////
// START
////
var express = require("express");
var http = require("http");
var io = require("socket.io");
var cors = require("cors");

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
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
    );
}

function getQuote(socket, ticker) {
    var dataObj;

    var quote = {};
    quote.ticker = ticker;
    quote.exchange = "NASDAQ";
    quote.price = getRandomValBetween(100, 300, 2);
    quote.change = getRandomValBetween(0, 200, 2);
    quote.change_percent = getRandomValBetween(0, 1, 2);
    quote.last_trade_time = getUTCDate();
    quote.dividend = getRandomValBetween(0, 1, 2);
    quote.yield = getRandomValBetween(0, 2, 2);

    socket.emit(ticker, PRETTY_PRINT_JSON ? JSON.stringify(quote, null, 4) : JSON.stringify(quote));
}

function trackTicker(socket, ticker, delay) {
    // run the first time immediately
    getQuote(socket, ticker);

    // every N seconds
    var timer = setInterval(function() {
        getQuote(socket, ticker);
    }, delay || FETCH_INTERVAL);

    socket.on("disconnect", function() {
        clearInterval(timer);
    });
}

var app = express();
app.use(cors());
var server = http.createServer(app);

var io = io.listen(server);
io.set("origins", "*:*");

app.get("/", function(req, res) {
    res.sendfile(__dirname + "/index.html");
});

app.get("/NASDAQ", (req, res) => {
    res.json([
        {
            key: "AAPL",
            name: "Apple Inc. Common Stock"
        },
        {
            key: "MSFT",
            name: "Microsoft Corporation Common Stock"
        },
        {
            key: "AMZN",
            name: "Amazon.com, Inc. Common Stock"
        },
        {
            key: "GOOGL",
            name: "Alphabet Inc. Class A Common Stock"
        },
        {
            key: "FB",
            name: "Facebook, Inc. Class A Common Stock"
        },
        {
            key: "BABA",
            name: "Alibaba Group Holding Limited American Depositary Shares"
        }
    ]);
});

io.sockets.on("connection", function(socket) {
    socket.on("ticker", function(ticker, delay) {
        trackTicker(socket, ticker, delay);
    });
});

server.listen(process.env.PORT || 4000);
