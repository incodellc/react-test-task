import actionTypes from '../actions/action-types';
import { fields, tickers, rewriteObjectProps } from '../../utils';

export const initState = {
    connecting: false,
    connected: false,
    fields: [...fields],
    tickers: [...tickers],
    bannedTickerIds: [],
    quotes: [],
    sortParams: {
        target: null,
        isDate: false,
        order: null,
        reverse: false
    },
    historyLength: 100,
    historyLengthOptions: [
        {
            key: 100,
            text: '100',
            value: 100
        },
        {
            key: 200,
            text: '200',
            value: 200
        },
        {
            key: 500,
            text: '500',
            value: 500
        },
        {
            key: 1000,
            text: '1000',
            value: 1000
        }
    ]
};

export const reducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.CONNECTION_INIT:
            return rewriteObjectProps(state, {
                connecting: true,
                bannedTickerIds: [],
                quotes: [],
                sort: rewriteObjectProps(state.sort, {
                    target: null,
                    isDate: false,
                    order: null,
                    reverse: false
                })
            });

        case actionTypes.STREAM_SERVER_CONNECT:
            if (!state.connected) {
                return rewriteObjectProps(state, {
                    connected: true,
                    connecting: false
                });
            }
            return state;

        case actionTypes.STREAM_SERVER_DISCONNECT:
            return rewriteObjectProps(state, {
                connected: false
            });
        
        case actionTypes.UPDATE_QUOTES:
            return rewriteObjectProps(state, {
                quotes: [action.data].concat(state.quotes.slice(0, state.historyLength - 1))
            });

        case actionTypes.TOGGLE_TICKER:

        case actionTypes.SET_HISTORY_LENGTH:

        case actionTypes.APPLY_SORT_PARAMS:
            
        default:
            return state;

    }
};