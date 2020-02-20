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
                sortParams: rewriteObjectProps(state.sortParams, {
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

        case actionTypes.APPLY_SORT_PARAMS:
            {
                let field = state.fields.find(field => field.name === action.target);
                if (field.sortable) {
                    let newOrderValue = 'ascending';
                    let newReverseValue = false;
                    if (state.sortParams.target === action.target) {
                        newOrderValue = state.sortParams.order === 'ascending' ? 'descending' : 'ascending';
                        newReverseValue = state.sortParams.reverse === false ? true : false;
                    }
                    return rewriteObjectProps(state, {
                        sortParams: rewriteObjectProps(state.sortParams, {
                            target: action.target,
                            isDate: field.isDate,
                            order: newOrderValue,
                            reverse: newReverseValue
                        })
                    });
                }
                return state;
            }

        case actionTypes.SET_HISTORY_LENGTH:
            return rewriteObjectProps(state, {
                historyLength: action.lengthValue
            });

        case actionTypes.RESET_HISTORY:
            return rewriteObjectProps(state, {
                quotes: []
            });

        case actionTypes.RESET_SORT_PARAMS:
            return rewriteObjectProps(state, {
                sortParams: {
                    target: null,
                    isDate: false,
                    order: null,
                    reverse: false
                }
            });
            
        default:
            return state;

    }
};