import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentTicker, setStockTicker} from '../../actions';
import PropTypes from 'prop-types';
import {tickers} from '../../constants';
import {changeTicker} from '../../services';


export class Tickers extends Component {
    handleClick(e) {
        const {setCurTicker, setTicker, currentInterval} = this.props;
        const {id} = e.target;
        setCurTicker(id);
        changeTicker(id, setTicker, currentInterval);
    }
    toggleClass(id) {
        return this.props.stockTicker === id ?
            'tickers-list__item current'
            : 'tickers-list__item';
    }
    render() {
        const {AAPL, SBUX, BA, NIKE, DOWJ} = tickers;
        return (
            <ul className="tickers-list">
                <li
                    id={AAPL}
                    onClick={this.handleClick.bind(this)}
                    className={this.toggleClass(AAPL)}>
                    {AAPL}
                </li>
                <li
                    id={DOWJ}
                    onClick={this.handleClick.bind(this)}
                    className={this.toggleClass(DOWJ)}>
                    {DOWJ}
                </li>
                <li
                    id={BA}
                    onClick={this.handleClick.bind(this)}
                    className={this.toggleClass(BA)}>
                    {BA}
                </li>
                <li
                    id={NIKE}
                    onClick={this.handleClick.bind(this)}
                    className={this.toggleClass(NIKE)}>
                    {NIKE}
                </li>
                <li
                    id={SBUX}
                    onClick={this.handleClick.bind(this)}
                    className={this.toggleClass(SBUX)}>
                    {SBUX}
                </li>
            </ul>
        );
    }
}


Tickers.propTypes = {
    setCurTicker: PropTypes.func,
    setTicker: PropTypes.func,
    currentInterval: PropTypes.number,
    stockTicker: PropTypes.string
};

const mapStateToProps = state => ({ stockTicker: state.currentTicker, currentInterval: state.interval });

const mapDispatchToProps = {
    setCurTicker: setCurrentTicker,
    setTicker: setStockTicker
};
export default connect(mapStateToProps, mapDispatchToProps)(Tickers);
