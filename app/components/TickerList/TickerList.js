import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import {connection} from '../../services';
import {connectionSocket, connectionSocketSuccess, connectionSocketFailure } from '../../actions';


class  TickerList extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line no-shadow
        const { connectionSocket, connectionSocketSuccess, connectionSocketFailure } = this.props;
        connectionSocket();
        try {
            connection('AAPL', data => {
                connectionSocketSuccess(data);
            });
        } catch (e) {
            connectionSocketFailure(e);
        }
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
                            console.log();
                            return(<tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{item.ticker}</td>
                                <td>{item.exchange}</td>
                                <td className={`price ${className}`}>{item.price}</td>
                                <td>{item.change}</td>
                                <td>{item.change_percent}</td>
                                <td>{moment(item.last_trade_time).format('LLL')}{" "}</td>
                                <td>{item.dividend}</td>
                                <td>{item.yield}</td>
                            </tr>);
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
const mapDispatchToProps = {connectionSocket, connectionSocketSuccess, connectionSocketFailure };

TickerList.propTypes = {
    tickers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    connectionSocket: PropTypes.func.isRequired,
    connectionSocketSuccess: PropTypes.func.isRequired,
    connectionSocketFailure: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerList);
//
// import React from 'react';
// import {connect} from 'react-redux';
// // import moment from 'moment';
// import PropTypes from 'prop-types';
//
// import {connection} from '../../services';
//
// // import Table from '@material-ui/core/Table';
// // import TableBody from '@material-ui/core/TableBody';
// // import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// // import TableHead from '@material-ui/core/TableHead';
// // import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
//
// import {connectionSocket, connectionSocketSuccess, connectionSocketFailure } from '../../actions';
//
//
// class TickerList extends React.Component {
//     componentDidMount() {
//         // eslint-disable-next-line no-shadow
//         const { connectionSocket, connectionSocketSuccess, connectionSocketFailure } = this.props;
//         connectionSocket();
//         try {
//             connection('AAPL', data => {
//                 connectionSocketSuccess(data);
//             });
//         } catch (e) {
//             connectionSocketFailure(e);
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="table-responsive-lg">
//                     <table className="table">
//                         <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Ticker</th>
//                             <th scope="col">Exchange</th>
//                             <th scope="col">Price</th>
//                             <th scope="col">Change</th>
//                             <th scope="col">Change percent</th>
//                             <th scope="col">Last trade time</th>
//                             <th scope="col">Dividend</th>
//                             <th scope="col">Yield</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {tickers.map((item, idx) => {
//                             const isPositiveDinamic = !tickers[idx - 1] ? null : item.price >= tickers[idx - 1].price;
//                             const className = isPositiveDinamic ? 'arrow-up' : 'arrow-down';
//                             console.log();
//                             return(<tr key={idx}>
//                                 <th scope="row">{idx + 1}</th>
//                                 <td>{item.ticker}</td>
//                                 <td>{item.exchange}</td>
//                                 <td className={`price ${className}`}>{item.price}</td>
//                                 <td>{item.change}</td>
//                                 <td>{item.change_percent}</td>
//                                 <td>{moment(item.last_trade_time).format('LLL')}{" "}</td>
//                                 <td>{item.dividend}</td>
//                                 <td>{item.yield}</td>
//                             </tr>);
//                         })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         tickers: state.tickers,
//         loading: state.loading,
//         error: state.error
//     };
// };
// const mapDispatchToProps = {connectionSocket, connectionSocketSuccess, connectionSocketFailure };
//
// TickerList.propTypes = {
//     tickers: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.object,
//     connectionSocket: PropTypes.func.isRequired,
//     connectionSocketSuccess: PropTypes.func.isRequired,
//     connectionSocketFailure: PropTypes.func.isRequired
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(TickerList);
