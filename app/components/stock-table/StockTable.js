import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { formatDate } from '../../utils';

import { stockTableColumns } from '../../data';

export const StockTable = ({ stockHistory }) => {
    const data = stockHistory.map((stock, id) => ({
        ...stock,
        key: id,
        last_trade_time: formatDate(stock.last_trade_time),
    }));

    return (
        <Table
            bordered
            size="small"
            dataSource={data}
            columns={stockTableColumns}
            pagination={{ pageSize: 5 }}
        />
    );
};

StockTable.propTypes = {
    stockHistory: PropTypes.array,
};
