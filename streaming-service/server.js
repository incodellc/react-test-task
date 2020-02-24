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

  // every N seconds
  var timer = setInterval(function() {
    getQuote(socket, ticker)
  }, FETCH_INTERVAL)

  socket.on('disconnect', function() {
    clearInterval(timer)
  })
}

var app = express()
app.use(cors())
var server = http.createServer(app)

var io = io.listen(server)
io.set('origins', '*:*')

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html')
})

// Change the fetch interval
app.put('/:ms', (req, res) => {
  try {
    const ms = req.params.ms
    if (ms < 0) throw new Error('The fetch interval cannot be less than zero')

    FETCH_INTERVAL = ms
    res
      .status(200)
      .json({ msg: `The fetch interval was changed: ${FETCH_INTERVAL}ms` })
  } catch (error) {
    res.status(200).json({ msg: error.message })
  }
})

io.sockets.on('connection', function(socket) {
  socket.on('ticker', function(ticker) {
    trackTicker(socket, ticker)
  })
})

server.listen(PORT, () => console.log('Server is running on port:', PORT))
