import actionTypes from '../actions/action-types';
import { fields, tickers, historyLengthOptions, rewriteObjectProps } from '../../utils';

export const initState = {
    connecting: true,
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
    historyLengthOptions: [...historyLengthOptions]
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
                connected: false,
                connecting: false
            });
        
        case actionTypes.UPDATE_QUOTES:
            return rewriteObjectProps(state, {
                quotes: [action.data].concat(state.quotes.slice(0, state.historyLength - 1))
            });

        case actionTypes.TOGGLE_TICKER:
            {
                let index = state.bannedTickerIds.findIndex(item => item === action.tickerId);
                let bannedTickerIds = state.bannedTickerIds;
                let newBannedTickerIds = index > -1 
                    ? bannedTickerIds.slice(0, index).concat(bannedTickerIds.slice(index + 1, state.bannedTickerIds.length))
                    : bannedTickerIds.concat(action.tickerId);
                return rewriteObjectProps(state, {
                    bannedTickerIds: newBannedTickerIds
                });
            }

        case actionTypes.SET_HISTORY_LENGTH:
            return rewriteObjectProps(state, {
                historyLength: action.lengthValue
            });

        case actionTypes.APPLY_SORT_PARAMS:
            
        default:
            return state;

    }
};