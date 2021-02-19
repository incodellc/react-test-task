import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TableItem extends Component {
    render() {
        const priceChangeColor = this.props.stock.change >= 0 ? 'increment' : 'decrement';
        const {stock} = this.props;
        return (
            <tr className={priceChangeColor}>
                <td>{stock.price}</td>
                <td>{stock.change}</td>
                <td>{stock.last_trade_time}</td>
            </tr>
        );
    }
}

TableItem.propTypes = {
    stock: PropTypes.objectOf(PropTypes.string).isRequired
};

