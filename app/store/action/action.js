import { TICKET, successAction } from '../types';
export function newTicker(Ticker) {
    console.log('Ticker is ', Ticker);
    return { type: successAction(TICKET), data: Ticker };
}
