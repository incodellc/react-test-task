import './stock.types';

const socket = require('socket.io-client')('http://localhost:4000');

/**
 * Convert socket data type to application type.
 * @param {string} stock
 * @returns {StockData}
 */
const convertStock = (stock) => {
    /**
     * @type {SocketStockData}
     */
    const data = JSON.parse(stock);

    return {
        ticker: data.ticker,
        exchange: data.exchange,
        price: data.price,
        change: data.change,
        changePercent: data.change_percent,
        lastTradeTime: data.last_trade_time,
        dividend: data.dividend,
        yieldValue: data.yield,
    };
};

/**
 * Fetch stock data with interval.
 * @param {string} name
 * @param {number} interval
 * @param {(data: StockData) => void} onUpdate
 */
const fetchStock = (name, interval, onUpdate) => {
    const update = (stock) => onUpdate(convertStock(stock));

    socket.on('connect', () => {
        socket.on(name, update);
        socket.emit('ticker', name, interval);
    });
};

/**
 * Updates stocks fetch interval.
 * @param {number} interval
 */
const updateInterval = (interval) => socket.emit('interval', interval);

// Export service
const StockService = Object.freeze({
    fetchStock,
    updateInterval,
});

export * from './stock.types';
export default StockService;
export { StockService };
