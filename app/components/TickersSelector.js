import React, { Component } from 'react';
import PropTypes from 'prop-types';
const availableTickers = require('../tickers.json');

export default class TickerSelector extends Component {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select data-my-test-id="selector-click" className="ticker-changer" value={this.props.value} onChange={this.props.onChange}>
                {availableTickers.tickers.map((ticker, idx) => {
                    return <option className="ticker" key={idx} value={ticker}>{ticker}</option>;
                })}
            </select>
        );
    }
}
