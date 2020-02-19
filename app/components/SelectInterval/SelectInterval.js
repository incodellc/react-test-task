import React from 'react';
import {changeInterval} from '../../services';

const SelectInterval = () => (
        <select name="" id="" onChange={(e) => changeInterval(e.target.value)}>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
            <option value="7000">7000</option>
            <option value="8000">8000</option>
            <option value="9000">9000</option>
            <option value="10000">10000</option>
            <option value="11000">11000</option>
        </select>
    );

export default SelectInterval;
