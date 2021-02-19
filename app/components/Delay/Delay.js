import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {changeDelay} from '../../services';
import {setInterval} from '../../actions';

export class Delay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({delay: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        const {delay} = this.state;
        const {setIntervalTime} = this.props;
        const timeInMs = delay * 1000;
        setIntervalTime(timeInMs);
        changeDelay(timeInMs);
    }
    render() {
        const {delay} = this.state;
        const {currentInterval} = this.props;
        return (
            <>
                <p className="delay-sign">Update every {currentInterval / 1000} seconds</p>
                <form className="interval-form" onSubmit={this.handleSubmit}>
                    <label className="interval-form__label" htmlFor="delay">Change time</label>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        onChange={this.handleChange}
                        value={delay}
                        placeholder="5"
                        id="delay"
                        className="interval-form__input"
                    />
                    <button type="submit" className="interval-form__button">OK</button>
                </form>
            </>
        );
    }
}

Delay.propTypes = {
    setIntervalTime: PropTypes.func,
    currentInterval: PropTypes.number
};

const mapStateToProps = state => ({ currentInterval: state.interval });

const mapDispatchToProps = {
    setIntervalTime: setInterval
};
export default connect(mapStateToProps, mapDispatchToProps)(Delay);


