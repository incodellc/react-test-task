import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableItem from '../TableItem/TableItem';

class DataTable extends Component {
    render() {
        return(
            <section className="data-table">
                <div className="table-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Change</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {this.props.stockTicker.map((stock)=><TableItem key={stock.last_trade_time} stock={stock}/>)}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({ stockTicker: state.stockTicker, location: state.router });

DataTable.propTypes = {
    stockTicker: PropTypes.array.isRequired,
    location: PropTypes.object,
};

export default connect(mapStateToProps, null)(DataTable);

