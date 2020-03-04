import React, {Component} from 'react';
import { connect as connectSocket} from '../services/tickerService';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Ticker extends Component {
    componentDidMount() {
        connectSocket(this.props, this.props.tickerName);
    }
    priceView = (difference) => {
        if(difference >= 0) {
            return <span> ( <span className = "dif-red"> {'+' + Math.abs(difference)}</span> ) </span>;
        }
        if(difference < 0) {
            return <span> ( <span className = "dif-blue"> {'-' + Math.abs(difference)}</span> ) </span>;
        }
    }
    preparedData = () => {
        const data = this.props.data;
        let dataView = null;
        if(data) {
            data[5][1] = new Date(data[5][1]).toUTCString();
            const difference = Math.round((data[2][1] - this.props.oldPrice) * 100) / 100;
            dataView = data.map((item, key) => {
                const [name, value] = item;
                return (
                <li  key={key}>
                    <p className = "names">{name.replace(/_/g, ' ')} :</p>
                    <p className = "values">{value}
                    {name === 'price' ? this.priceView(difference) : ''}
                    </p>
                </li>);
            });
        }
        return dataView || 'Sorry. We have not had data yet';
    }
    render() {
        return(
        <div className="ticker">
            <ul className="data-wrapper">{this.preparedData()}</ul>
        </div>
        );
    }
}

export function mapStateToProps(state) {
    return state;
}
Ticker.propTypes = {
    data: PropTypes.array,
    tickerName: PropTypes.string,
    oldPrice: PropTypes.string
};
export default connect(mapStateToProps)(Ticker);
