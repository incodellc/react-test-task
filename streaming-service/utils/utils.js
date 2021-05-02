const getRandomValBetween = (_min, _max, _precision) => {
    const min = _min === undefined ? 0 : _min;
    const max = _max === undefined ? 9007199254740992 : _max;
    const precision = _precision === undefined ? 0 : _precision;

    const random = Math.random() * (max - min) + min;

    return random.toFixed(precision);
};

const getUTCDate = () => {
    const now = new Date();
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
};

module.exports = {getRandomValBetween, getUTCDate};
