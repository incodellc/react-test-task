import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import { setFetchInterval } from '../../actions';

export class SetIntervalForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.setReloadTime = this.setReloadTime.bind(this);
    }

    handleChange(event) {
        this.props.setFetchInterval(Number(event.target.value));
    }

    setReloadTime(res) {
        localStorage.setItem('interval', JSON.stringify(res));
        try {
            axios.post(`http://localhost:4000/${res}`);
        } catch(error) {
            throw new Error(error);
        }
    }

    render() {
        const{interval} = this.props;
        return (
            <div className="set-interval-form col-md-4">
                <form className="form-inline">
                    <div className="form-group">
                        <label>
                            Select data acquisition interval:
                        </label>
                            <select className="form-control" value={interval} onChange={this.handleChange}>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                                <option value="1500">1500</option>
                                <option value="2000">2000</option>
                                <option value="2500">2500</option>
                                <option value="3000">3000</option>
                                <option value="3500">3500</option>
                                <option value="4000">4000</option>
                                <option value="4500">4500</option>
                                <option value="5000">5000</option>
                            </select>
                        <button className="btn btn-light" onClick={() => this.setReloadTime(interval)}> Set interval </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        interval: state.interval
    };
};

const mapDispatchToProps = {
    setFetchInterval
};

SetIntervalForm.propTypes = {
    interval: PropTypes.number.isRequired,
    setFetchInterval: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetIntervalForm);
