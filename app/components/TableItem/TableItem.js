import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableItem extends Component {
    render() {
        const priceChangeColor = this.props.stock.change >= 0 ? 'increment' : 'decrement';
        return (
            <tr className={priceChangeColor}>
                <td>{this.props.stock.price}</td>
                <td>{this.props.stock.change}</td>
                <td>{this.props.stock.last_trade_time}</td>
            </tr>
        );
    }
}

TableItem.propTypes = {
    stock: PropTypes.objectOf(PropTypes.string).isRequired
};

export default TableItem;
