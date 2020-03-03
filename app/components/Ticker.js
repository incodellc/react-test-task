import React, {Component} from 'react';
import { connect as connectSocket} from '../services/tickerService';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Ticker extends Component {
    componentDidMount() {
        connectSocket(this.props, this.props.tickerName);
    }
    parsedDataView = () => {
        const data = this.props.data ? Object.entries(JSON.parse(this.props.data)) : undefined;
        let parsedData = null;
        if(data) {
            data[5][1] = new Date(data[5][1]).toUTCString();
            parsedData = data.map((item, key) => {
                const [name, value] = item;
                return (<li  key={key}>
                    {<span className = "names">{name.replace(/_/g, ' ')} :</span>}
                    {<span className = "values">{value}</span>}
                </li>);
            });
        }
        return parsedData || 'Sorry. We have not had data yet';
    }
    render() {
        return(
        <div className="ticker">
            <ul className="data-wrapper">{this.parsedDataView()}</ul>
        </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        data: state.data,
    };
}
Ticker.propTypes = {
    data: PropTypes.string,
    tickerName: PropTypes.string,
};
export default connect(mapStateToProps)(Ticker);
