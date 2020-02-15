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
        name: 'exchanger',
        label: 'Exchange',
        isDate: false,
        sortable: false
    },
    {
        name: 'ticker',
        label: 'Ticker',
        isDate: false,
        sortable: true
    },
    {
        name: 'price',
        label: 'Price',
        isDate: false,
        sortable: true
    },
    {
        name: 'change',
        label: 'Change',
        isDate: false,
        sortable: true
    },
    {
        name: 'change_percent',
        label: 'Change %',
        isDate: false,
        sortable: true
    },
    {
        name: 'dividend',
        label: 'Dividend',
        isDate: false,
        sortable: true
    },
    {
        name: 'yield',
        label: 'Yield',
        isDate: false,
        sortable: true
    },
    {
        name: 'last_trade_time',
        label: 'Last trade time',
        isDate: true,
        sortable: true
    }
];

export const rewriteObjectProps = (prevObject, newPropsValues) => {
    return {
        ...prevObject,
        ...newPropsValues
    };
};