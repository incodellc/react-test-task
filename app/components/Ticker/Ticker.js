import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export const Ticker = ({id, item, className}) => {
    const tradeTime = moment( new Date(item.last_trade_time)).format('HH:mm:ss, MM-DD');
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{item.ticker}</td>
            <td>{item.exchange}</td>
            <td className={`price ${className}`}>{item.price}</td>
            <td>{item.change}</td>
            <td>{item.change_percent}</td>
            <td>{tradeTime}{" "}</td>
            <td>{item.dividend}</td>
            <td>{item.yield}</td>
        </tr>
    );
};

Ticker.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
};

