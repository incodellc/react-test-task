import React from 'react';
import { IntervalSelector } from './IntervalSelector';
import { Select } from 'antd';

const setUp = (props) => shallow(<IntervalSelector {...props} />);

const props = {
    onIntervalChange: () => { },
};

describe('should render IntervalSelector component', () => {
    it('should contain Select as a child component', () => {
        const childComponent = setUp(props).find(Select);
        expect(childComponent).toHaveLength(1);
    });

    describe('IntervalSelector component with props', () => {
        it('Test change events', () => {
            const MockCallBack = jest.fn();
            const childComponent = setUp({ onIntervalChange: MockCallBack }).find(Select);
            expect(MockCallBack.mock.calls.length).toBe(0);
            childComponent.simulate('change');
            expect(MockCallBack.mock.calls.length).toBe(1);
        });
    });
});