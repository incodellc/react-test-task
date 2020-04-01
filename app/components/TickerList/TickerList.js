import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {connection} from '../../services';
import {startFetching } from '../../actions';
import {Ticker} from '../Ticker/Ticker';


class  TickerList extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line no-shadow
        const { startFetching } = this.props;
        startFetching();
    }
    render() {
        const {tickers, loading, error} = this.props;
        if (loading) {
            return (<p className="row">Loading...</p>);
        }
        if(error) {
            return (<p className="row">ERROR!!!!!!!!!!!!!</p>);
        }
        return (
            <div>
                <div className="table-responsive-lg">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ticker</th>
                            <th scope="col">Exchange</th>
                            <th scope="col">Price</th>
                            <th scope="col">Change</th>
                            <th scope="col">Change percent</th>
                            <th scope="col">Last trade time</th>
                            <th scope="col">Dividend</th>
                            <th scope="col">Yield</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tickers.map((item, idx) => {
                            const isPositiveDynamic = !tickers[idx - 1] ? null : item.price >= tickers[idx - 1].price;
                            const className = isPositiveDynamic ? 'arrow-up' : 'arrow-down';
                            return(
                                <Ticker key={idx} id={idx + 1} item={item} className={className}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        tickers: state.tickers,
        loading: state.loading,
        error: state.error
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        startFetching: startFetching(dispatch, connection)
    };
};

TickerList.propTypes = {
    tickers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    startFetching: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerList);

