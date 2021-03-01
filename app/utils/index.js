import moment from 'moment';

export function formatDate(date) {
    return moment(date).format('LLL');
}

export function formatTime(date) {
    return moment(date).format('HH:mm:ss');
}
