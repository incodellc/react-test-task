import React from 'react';
import { Link } from 'react-router-dom';

const Controls = () => {
    return (
        <div className="controls">
            <div className="controls__type-btns">
                <Link to="detail" className="controls__btn controls__btn--info">Detail</Link>
                <Link to="table" className="controls__btn controls__btn--table">Table</Link>
            </div>
            <div className="controls__delay"></div>
        </div>
    );
};

export default Controls;
