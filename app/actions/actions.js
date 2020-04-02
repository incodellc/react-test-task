export const GET_NEW_DATA = 'GET_NEW_DATA';

export const getNewData = (data) => ({
    type: GET_NEW_DATA,
    payload: data,
});
