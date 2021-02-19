export const addZero = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
};

export const formatDate = (date) => {
    const dateObj = new Date(date);
    const year = addZero(dateObj.getFullYear());
    const month = addZero(dateObj.getMonth() + 1);
    const day = addZero(dateObj.getDate());
    const hours = addZero(dateObj.getHours());
    const min = addZero(dateObj.getMinutes());
    const sec = addZero(dateObj.getSeconds());

    return (`${day}/${month}/${year} ${hours}:${min}:${sec}`);
};
