import React from 'react';
import './style.scss';
import { mStP, mDtP } from '../setts/actions';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { inputWrapper } from '../../system/helper';

class Menu extends PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        const { name, value } = e.target;
        inputWrapper(name)(parseInt(value, 10), this.props.dispatchWrapper);
        return;
    }
    render() {
        const { displayColumns } = this.props.stockTicker;
        const { defaultIntervals, interval } = this.props.fetchInterval;

        return (
            <div className="menu">
                <section className="section">
                    <label className="label">
                        Number of tickers to display
                        <input
                            type="number"
                            className="input"
                            name="columnLimit"
                            value={displayColumns}
                            onChange={this.onChange}
                        ></input>
                    </label>
                    {displayColumns === 0 ? (
                        <p className="warning">
                            Number of columns can be only from 1 to 15
                        </p>
                    ) : null}
                    <label className="label">
                        Getting data delay
                        <select
                            onChange={this.onChange}
                            name="fetchDelay"
                            value={interval}
                        >
                            {defaultIntervals.map((item, ind) => (
                                <option
                                    key={ind * Math.random() + 1}
                                    value={item}
                                >
                                    {item / 1000}s
                                </option>
                            ))}
                        </select>
                    </label>
                </section>
            </div>
        );
    }
}

export default connect(mStP, mDtP)(Menu);
