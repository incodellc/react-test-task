import React, { Component } from 'react';
import {changeDelay} from '../../services/tickerService';

class Delay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: '',
            current: '5'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({delay: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        const timeInMillisec = this.state.delay * 1000;
        changeDelay(timeInMillisec);
        this.setState({current: this.state.delay});
    }
    render() {
        return (
            <>
                <p className="delay-sign">Update every {this.state.current} seconds</p>
                <form className="interval-form" onSubmit={this.handleSubmit}>
                    <label className="interval-form__label" htmlFor="delay">Change time</label>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        onChange={this.handleChange}
                        value={this.state.delay}
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

export default Delay;
