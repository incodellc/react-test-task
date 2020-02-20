import moment from 'moment';
export { quotesExample, tickers, fields, historyLengthOptions } from './presets';

export const rewriteObjectProps = (prevObject, newPropsValues) => {
    return {
        ...prevObject,
        ...newPropsValues
    };
};

export const sortByKey = (arrayOfObjects, sortParams) => {
    let { target, isDate, reverse } = sortParams;
    let data = arrayOfObjects.slice();

    if (target === null) {
        return data;
    }

    const compareByKey = (key, isDate = false, isDesc = false) => {
        let orderFlag = isDesc ? -1 : 1;
        return (a, b) => {
            let valA = typeof a[key] === 'string' && isNaN(a[key]) ? a[key].toUpperCase() : typeof +a[key] ===  'number' ? +a[key] : '';
            let valB = typeof b[key] === 'string' && isNaN(a[key]) ? b[key].toUpperCase() : typeof +b[key] ===  'number' ? +b[key] : '';
            if (isDate) {
                valA = valA === '' ? moment(+valA) : moment(valA, 'DD-MM-YYYY HH:mm');
                valB = valB === '' ? moment(+valB) : moment(valB, 'DD-MM-YYYY HH:mm');
            }
            let result = (valA < valB) ? -1 : (valA > valB) ? 1 : 0;
            return result * orderFlag;
        };
    };

    return data.sort(compareByKey(target, isDate, reverse));
};
