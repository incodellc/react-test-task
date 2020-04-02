import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {connection} from '../../services/';
import {startFetching } from '../../actions';
import TickerList from '../../components/TickerList/TickerList';


export class  TickersContainer extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line no-shadow
        const { startFetching } = this.props;
        startFetching();
    }
    render() {
        const {tickers, loading, error} = this.props;
        return (
            <div>
                {error && <p className="row">ERROR!!!!!!!!!!!!!</p>}
                {loading ? <p className="row">Loading...</p> : null}
                {tickers && tickers.length &&  <TickerList tickers={tickers} />}
            </div>
        );
    }
}

const mapStateToProps = ({tickers, loading, error}) => {
    return {
        tickers,
        loading,
        error
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        startFetching: startFetching(dispatch, connection)
    };
};

TickersContainer.propTypes = {
    tickers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    startFetching: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TickersContainer);

