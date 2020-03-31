import React, { Component } from 'react';
import { connect as connectSocket } from '../services';
import { connect } from 'react-redux';


class Ticker extends Component {
  componentDidMount() {
    connectSocket(this.props, this.props.stockSymbol);
  }

  render() {
    const { data } = this.props;

    if (data) {
      return(
        <div>
          <h1>{data.price}</h1>
        </div>
      );
    }

    return(
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Ticker);
