import io from 'socket.io-client';
import {
    defaultUri,
    CONNECT_ACTION_TYPE,
    DISCONNECT_ACTION_TYPE,
    SET_FETCH_INTERVAL_ACTION_TYPE,
} from '../system/defaultStates';
import { dataFormater } from '../system/helper';
import getState from '../index';

let socket = null;

const initSocket = (uri = defaultUri) => (socket ? socket : io(uri));

export const disconnect = () => {
    if (socket !== null) {
        socket.close();
        socket = null;
    }
};

export const connect = (dispatch) => {
    socket = initSocket();
    socket.on('connect', () => {
        console.log('connected');
        const {
            stockTicker: { name },
            fetchInterval: { interval },
        } = getState();

        socket.on(name, (data) => {
            const parsed = JSON.parse(data);
            const formatted = dataFormater(parsed);
            if (typeof formatted !== 'string') {
                dispatch({
                    type: CONNECT_ACTION_TYPE,
                    newData: formatted,
                    ticker: name,
                });
            } else {
                dispatch({
                    type: DISCONNECT_ACTION_TYPE,
                });
            }
        });
        socket.emit('ticker', name, interval);
    });
    socket.on('disconnect', () => {
        console.log('disconnect');
        dispatch({
            type: DISCONNECT_ACTION_TYPE,
        });
    });
};

export const setInterval = (newInterval, dispatch) => {
    socket = initSocket();
    socket.emit('set interval', newInterval);

    dispatch({
        type: SET_FETCH_INTERVAL_ACTION_TYPE,
        newData: newInterval,
    });
};
