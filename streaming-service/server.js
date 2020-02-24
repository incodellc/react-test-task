'use strict'

////
// CONFIGURATION SETTINGS
////
const PORT = process.env.PORT || 4000
const PRETTY_PRINT_JSON = true
var FETCH_INTERVAL = 5000

////
// START
////
var express = require('express')
var http = require('http')
var io = require('socket.io')
var cors = require('cors')
require('dotenv/config')

var app = express()
app.use(cors())
var server = http.createServer(app)

var io = io.listen(server)
io.set('origins', '*:*')

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.sockets.on('connection', function(socket) {
  socket.on('ticker', function(ticker) {
    trackTicker(socket, ticker)
  })

  socket.on('changeInterval', ms => {
    if (ms < 0) throw new Error('The fetch interval cannot be less than zero')
    FETCH_INTERVAL = ms
  })
})

server.listen(PORT, () => console.log('Server is running on port:', PORT))

function getRandomValBetween(min, max, precision) {
  min = min === undefined ? 0 : min
  max = max === undefined ? 9007199254740992 : max
  precision = precision === undefined ? 0 : precision

  var random = Math.random() * (max - min) + min

  return random.toFixed(precision)
}

function getUTCDate() {
  var now = new Date()
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  )
}

function getQuote(socket, ticker) {
  var quote = {
    ticker: ticker,
    exchange: 'NASDAQ',
    price: getRandomValBetween(100, 300, 2),
    change: getRandomValBetween(0, 200, 2),
    change_percent: getRandomValBetween(0, 1, 2),
    last_trade_time: getUTCDate(),
    dividend: getRandomValBetween(0, 1, 2),
    yield: getRandomValBetween(0, 2, 2)
  }

  socket.emit(
    ticker,
    PRETTY_PRINT_JSON ? JSON.stringify(quote, null, 4) : JSON.stringify(quote)
  )
}

function trackTicker(socket, ticker) {
  console.log('track Ticker')

  // run the first time immediately
  getQuote(socket, ticker)

  const runFetchingInterval = () => {
    const time = FETCH_INTERVAL
    const interval = setInterval(() => {
      if (time == FETCH_INTERVAL) {
        getQuote()
        return
      }

      // Clear and set new interval time
      clearInterval(interval)
      runFetchingInterval()
    }, FETCH_INTERVAL)
  }

  socket.on('disconnect', function() {
    clearInterval(timer)
  })
}
