import React from 'react';

import PropTypes from 'prop-types';

class Tickers extends React.Component {
    render() {
        return (
      <div className="">
        <div className="">{this.props.ticker.price}</div>
      </div>
    );
    }
}
Tickers.propTypes = {
    ticker: PropTypes.object
};

export default Tickers;
