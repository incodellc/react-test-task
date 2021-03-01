import React from 'react';

import { Table } from 'antd';

import { mockHistory, stockTableColumns } from '../../data';

describe('Stock Table', () => {
    it('have to render 5 stock entrie for one pagination page', () => {
        const table = (
            <Table
                dataSource={mockHistory}
                columns={stockTableColumns}
                pagination={{ pageSize: 5 }}
            />
        );

        expect(table.props.pagination.pageSize).toBe(5);
    });
});
