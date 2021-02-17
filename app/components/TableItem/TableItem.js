import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        return (
            <tr className="tickers-list__item">
                <td>{this.props.stock.price}</td>
                <td>{this.props.stock.change}</td>
                <td>{this.props.stock.last_trade_time}</td>
            </tr>
        );
    }
}

ListItem.propTypes = {
    stock: PropTypes.objectOf(PropTypes.string).isRequired
};

export default ListItem;
