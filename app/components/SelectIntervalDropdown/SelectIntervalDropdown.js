import React, { useState } from 'react';
import List from '../List/List';
import sendInterval from '../../services/sendInterval';

import './SelectedDropDown.scss';

// eslint-disable-next-line react/prop-types
const SelectIntervalDropdown = ({ intervals }) => {
    const [selectedInterval, setSelectedInterval] = useState(null);

    const listItems = intervals.map((el, i) =>
        <li
            className="interval__item"
            key={i}
            onClick={() => {
                setSelectedInterval(el);
                sendInterval(el);
            }}
        >
            {el + ' seconds'}
        </li>
    );
    return (
        <div className="dropdown">
            <List items={listItems} listHeader={'Select interval'} />
            {selectedInterval !== null
                ? <div className="interval__message" data-testid="seconds">Price publication interval: <br /><span>{selectedInterval} seconds</span></div>
                : null
            }

        </div>
    );
};

export default SelectIntervalDropdown;
