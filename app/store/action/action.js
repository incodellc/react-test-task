import {
    TICKET,
    successAction
} from '../types';
export function newTicker(ticker) {
    return { type: successAction(TICKET), data: ticker };
}
