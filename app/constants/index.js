import PropTypes from 'prop-types';

export const dataType = {
    ticker: PropTypes.string,
    exchange: PropTypes.string,
    price: PropTypes.string,
    change: PropTypes.string,
    change_percent: PropTypes.string,
    last_trade_time: PropTypes.string,
    dividend: PropTypes.string,
    yield: PropTypes.string,
    upward: PropTypes.bool,
};
