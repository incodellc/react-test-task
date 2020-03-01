import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ setInterval }) => {
    const timeIntervals = [5, 10, 30];

    return (
        <div className="update-interval-dropdown">
            <button
                className="btn-secondary update-interval-btn text-capitalize"
                type="button"
            >
                Set update interval (sec)
            </button>
            <div className="update-interval-content ">
                {timeIntervals.map((time, idx) => {
                    return (
                        <button
                            className="update-interval-item dropdown-item bg-light"
                            key={idx}
                            onClick={() => setInterval(time)}
                        >
                            {time}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        setInterval: time => dispatch({ type: 'SET_INTERVAL', payload: time })
    };
};

export default connect(null, mapDispatchToProps)(Dropdown);
