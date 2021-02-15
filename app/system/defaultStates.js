export const defaultSymbol = 'AAPL';
export const defaultUri = 'http://localhost:4000';
export const defaultKeys = [
    'ticker',
    'exchange',
    'price',
    'change',
    'change_percent',
    'last_trade_time',
    'dividend',
    'yield',
];

export const CONNECT_ACTION_TYPE = 'SET_TICKER';
export const DISCONNECT_ACTION_TYPE = 'DISCONNECT';
export const SET_DISPLAY_COLUMNS_ACTION_TYPE = 'SET_DISPLAY_COLUMN_LIMIT';
export const SET_FETCH_INTERVAL_ACTION_TYPE = 'SET_NEW_FETCH_INTERVAL';

export const fetchState = {
    interval: 5000,
    defaultIntervals: [
        500,
        1000,
        1500,
        2000,
        2500,
        3000,
        3500,
        4000,
        4500,
        5000,
    ],
};

export const tickerState = {
    data: [],
    name: 'AAPL',
    tickerName: defaultSymbol,
    displayColumns: 1,
    errorChecker: false,
};
