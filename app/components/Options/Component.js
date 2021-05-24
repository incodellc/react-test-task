import React from 'react';
import PropTypes from 'prop-types';

import { List, Value } from './styles';

/**
 * @param {{ values: string[], defaultValue?: string, onSelect: (value: string) => void }} params
 * @returns Component
 */

export const Component = ({ values, defaultValue, onSelect }) => {
    return (
        <List onChange={(e) => onSelect(e.target.value)} defaultValue={defaultValue}>
            {values?.map((value, i) => (
                <Value key={`${i}_${value}`} value={value}>{value}</Value>
            ))}
        </List>
    );
};

Component.propTypes = {
    values: PropTypes.array.isRequired,
    defaultValue: PropTypes.string,
    onSelect: PropTypes.func,
}
