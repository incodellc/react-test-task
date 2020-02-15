import React from 'react';
import '../style.css';
import PropTypes from 'prop-types';

class Ticker extends React.Component {
    render() {
        return (
      <div className="">
        <div className="">{this.props.ticker.price}</div>
      </div>
    );
    }
}
Ticker.propTypes = {
    ticker: PropTypes.object
};

export default Ticker;
