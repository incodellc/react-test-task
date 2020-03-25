import {
    UPDATE_DATA_FROM_SERVICE,
    SERVICE_DATA_CHANGED_UP,
    SERVICE_DATA_CHANGED_DOWN} from './action-types';


export const updateDataFromService = (data) => ({
    type: UPDATE_DATA_FROM_SERVICE,
    data,
});

export const serviceDataChangedUp = () => ({
    type: SERVICE_DATA_CHANGED_UP,
});
export const serviceDataChangedDown = () => ({
    type: SERVICE_DATA_CHANGED_DOWN,
});
