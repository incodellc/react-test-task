import { SET_DISPLAY_COLUMNS_ACTION_TYPE, defaultKeys } from './defaultStates';
import { setInterval } from '../services/tickerService';

export const dataFormater = (serverData) => {
    const res = {};
    const keys = Object.keys(serverData);

    if (
        keys.length !== defaultKeys.length ||
        !defaultKeys.some((item) => keys.indexOf(item) !== -1)
    ) {
        return 'Server connection error.';
    }

    for (const item in serverData) {
        if (item === 'yield') {
            res._yield = serverData[item];
            continue;
        } else {
            const formated = item.replace(/(_)([^_]{1})/g, (char) => {
                return char[1].toUpperCase();
            });
            res[formated] = serverData[item];
        }
    }
    return res;
};

export const inputWrapper = (name) => {
    switch (name) {
        case 'columnLimit':
            return (value, dispatchFn) => {
                if (value >= 1 && value <= 15) {
                    dispatchFn({
                        type: SET_DISPLAY_COLUMNS_ACTION_TYPE,
                        newData: value,
                    });
                } else {
                    dispatchFn({
                        type: SET_DISPLAY_COLUMNS_ACTION_TYPE,
                        newData: 0,
                    });
                }
            };
        case 'fetchDelay':
            return setInterval;
        default:
            return null;
    }
};
