import React from 'react';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

describe('Stock Info', () => {
    const isStockChangePositive = (isPositive) =>
        isPositive ? <RiseOutlined /> : <FallOutlined />;

    it('Draw green rise icon when changed percent is positive', () => {
        expect(isStockChangePositive(true)).toStrictEqual(<RiseOutlined />);
    });

    it('Draw red fall icon when changed percent is negative', () => {
        expect(isStockChangePositive(false)).toStrictEqual(<FallOutlined />);
    });
});
