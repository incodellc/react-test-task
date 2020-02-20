export const quotesExample = [
    {
        ticker: "AAPL",
        exchange: "NASDAQ",
        price: "213.41",
        change: "-38.72",
        change_percent: "-0.18",
        last_trade_time: "2020-02-15T21:40:17Z",
        dividend: "0.56",
        yield: "0.55"
    },
    {
        ticker: "GOOGL",
        exchange: "NASDAQ",
        price: "253.86",
        change: "5.59",
        change_percent: "0.02",
        last_trade_time: "2020-02-15T21:48:18Z",
        dividend: "0.82",
        yield: "1.08"
    },
    {
        ticker: "AMZN",
        exchange: "NASDAQ",
        price: "244.82",
        change: "21.81",
        change_percent: "0.09",
        last_trade_time: "2020-02-15T21:42:18Z",
        dividend: "0.82",
        yield: "1.30"
    },
    {
        ticker: "ADBE",
        exchange: "NASDAQ",
        price: "275.75",
        change: "11.16",
        change_percent: "0.04",
        last_trade_time: "2020-02-15T21:45:18Z",
        dividend: "0.58",
        yield: "1.02"
    },
    {
        ticker: "CSCO",
        exchange: "NASDAQ",
        price: "225.81",
        change: "-12.73",
        change_percent: "-0.06",
        last_trade_time: "2020-02-15T21:44:18Z",
        dividend: "0.46",
        yield: "1.12"
    },
    {
        ticker: "DISCK",
        exchange: "NASDAQ",
        price: "257.54",
        change: "4.77",
        change_percent: "0.02",
        last_trade_time: "2020-02-15T21:50:18Z",
        dividend: "0.82",
        yield: "1.31"
    },
    {
        ticker: "EBAY",
        exchange: "NASDAQ",
        price: "210.04",
        change: "-29.38",
        change_percent: "-0.14",
        last_trade_time: "2020-02-15T21:46:18Z",
        dividend: "0.24",
        yield: "0.00"
    },
    {
        ticker: "NFLX",
        exchange: "NASDAQ",
        price: "230.34",
        change: "-13.58",
        change_percent: "-0.06",
        last_trade_time: "2020-02-15T21:47:18Z",
        dividend: "0.21",
        yield: "0.54"
    },
    {
        ticker: "MSFT",
        exchange: "NASDAQ",
        price: "246.52",
        change: "32.02",
        change_percent: "-0.13",
        last_trade_time: "2020-02-15T21:49:18Z",
        dividend: "0.75",
        yield: "1.05"
    },
    {
        ticker: "TSLA",
        exchange: "NASDAQ",
        price: "204.50",
        change: "-45.42",
        change_percent: "-0.22",
        last_trade_time: "2020-02-15T21:41:18Z",
        dividend: "0.63",
        yield: "1.11"
    }
];

export const tickers = [
    {
        tickerId: 'AAPL',
        company: 'Apple Inc.'
    },
    {
        tickerId: 'GOOGL',
        company: 'Alphabet Inc.'
    },
    {
        tickerId: 'AMZN',
        company: 'Amazon.com, Inc.'
    },
    {
        tickerId: 'ADBE',
        company: 'Adobe Systems Inc.'
    },
    {
        tickerId: 'CSCO',
        company: 'Cisco Systems, Inc.'
    },
    {
        tickerId: 'DISCK',
        company: 'Discovery Inc.'
    },
    {
        tickerId: 'EBAY',
        company: 'eBay Inc.'
    },
    {
        tickerId: 'NFLX',
        company: 'Netflix'
    },
    {
        tickerId: 'MSFT',
        company: 'Microsoft Corporation'
    },
    {
        tickerId: 'TSLA',
        company: 'Tesla Motors, Inc.'
    }
];

export const fields = [
    {
        name: 'exchange',
        alias: 'Exchange',
        isDate: false,
        sortable: false
    },
    {
        name: 'ticker',
        alias: 'Ticker',
        isDate: false,
        sortable: true
    },
    {
        name: 'price',
        alias: 'Price',
        isDate: false,
        sortable: true
    },
    {
        name: 'change',
        alias: 'Change',
        isDate: false,
        sortable: true
    },
    {
        name: 'change_percent',
        alias: 'Change %',
        isDate: false,
        sortable: true
    },
    {
        name: 'dividend',
        alias: 'Dividend',
        isDate: false,
        sortable: true
    },
    {
        name: 'yield',
        alias: 'Yield',
        isDate: false,
        sortable: true
    },
    {
        name: 'last_trade_time',
        alias: 'Last trade time',
        isDate: true,
        sortable: true
    }
];

export const historyLengthOptions = [
    {
        key: 100,
        text: '100 quotes',
        value: 100
    },
    {
        key: 200,
        text: '200 quotes',
        value: 200
    },
    {
        key: 500,
        text: '500 quotes',
        value: 500
    },
    {
        key: 1000,
        text: '1000 quotes',
        value: 1000
    }
];