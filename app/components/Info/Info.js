import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Info extends Component {
    render() {
        const tickerInfo = this.props.stockTicker[0];
        return (
            <section className="info">
                {!!tickerInfo && (
                    <ul className="info-list">
                        <li className="info-list__item"><span>Exchange</span><span>{tickerInfo.exchange}</span></li>
                        <li className="info-list__item"><span>Price</span><span>{tickerInfo.price}</span></li>
                        <li className="info-list__item"><span>Change</span><span>{tickerInfo.change}</span></li>
                        <li className="info-list__item"><span>Change percent</span><span>{tickerInfo.change_percent}</span></li>
                        <li className="info-list__item"><span>Dividend</span><span>{tickerInfo.dividend}</span></li>
                        <li className="info-list__item"><span>Yield</span><span>{tickerInfo.yield}</span></li>
                        <li className="info-list__item"><span>Date</span><span>{tickerInfo.last_trade_time}</span></li>
                    </ul>
                )}
            </section>
        );
    }
}

Info.propTypes = {
    stockTicker: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({ stockTicker: state.stockTicker });

export default connect(mapStateToProps, null)(Info);

