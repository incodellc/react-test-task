import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const IntervalSelector = (props) => {
    const { onIntervalChange } = props;
    return (
        <Select defaultValue={'5000'} style={{ width: 120 }} onChange={onIntervalChange}>
            <Option value="500">0.5 sec</Option>
            <Option value="1000">1 sec</Option>
            <Option value="2000">2 sec</Option>
            <Option value="5000">5 sec</Option>
            <Option value="10000">10 sec</Option>
        </Select>
    );
};

IntervalSelector.propTypes = {
    onIntervalChange: PropTypes.func.isRequired,
};

export { IntervalSelector };
