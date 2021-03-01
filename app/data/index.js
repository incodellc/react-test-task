// COMMON DATA
export const stockList = [
    { company: 'Apple Inc. Common Stock', abbr: 'APPL' },
    { company: 'Facebook, Inc. Common Stock', abbr: 'FB' },
    { company: 'Microsoft Corporation Common Stock', abbr: 'MSFT' },
    { company: 'Netflix, Inc. Common Stock', abbr: 'NFLX' },
    { company: 'Amazon.com, Inc. Common Stock', abbr: 'AMZN' },
];

export const stockTableColumns = [
    {
        title: 'Ticker',
        dataIndex: 'ticker',
        key: 'ticker',
    },
    {
        title: 'Exchange',
        dataIndex: 'exchange',
        key: 'exchange',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Change',
        dataIndex: 'change',
        key: 'change',
        responsive: ['md'],
    },
    {
        title: 'Change Percent',
        dataIndex: 'change_percent',
        key: 'change_percent',
    },
    {
        title: 'Last Trade Time',
        dataIndex: 'last_trade_time',
        key: 'last_trade_time',
        responsive: ['md'],
    },
];

// MOCK DATA
export const mockStock = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: 116.6,
    change: -0.46,
    change_percent: -0.39,
    last_trade_time: 'Oct 21, 4:00PM EDT',
    dividend: 0.57,
    yield: 1.96,
};

export const mockHistory = new Array(5).fill(mockStock);
