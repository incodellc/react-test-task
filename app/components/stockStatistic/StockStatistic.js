import React from 'react';
import { Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const StockStatistic = (props) => {
    const { lastChange, secondLastChange } = props;
    return (
        <Statistic
            title="Change percent"
            value={Math.round(lastChange * 100)}
            prefix={
                lastChange > secondLastChange ?
                    <ArrowUpOutlined /> : <ArrowDownOutlined />
            }
            suffix={'%'}
            valueStyle={
                lastChange > secondLastChange ?
                    { color: '#3f8600' } : { color: '#cf1322' }
            }
        />
    );
};

StockStatistic.propTypes = {
    lastChange: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    secondLastChange: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export { StockStatistic };
