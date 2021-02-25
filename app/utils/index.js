export const prepareDate = (dateStr) => {
    const checkZero = (number) => number < 10 ? `0${number}` : `${number}`;

    const date = new Date(dateStr);
    const day = checkZero(date.getDate());
    const month = checkZero(date.getMonth() + 1);
    const year = checkZero(date.getFullYear());
    const sec = checkZero(date.getSeconds());
    const min = checkZero(date.getMinutes());
    const hours = checkZero(date.getHours());

    return `${day}/${month}/${year} ${hours}:${min}:${sec}`;
};
