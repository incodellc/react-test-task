import React from 'react';
import { StickyWrapper } from '../../../components';
import { cleanup, render } from '@testing-library/react';

describe('Check StickyWrapper component', () => {
    afterEach(cleanup);
    
    const SW = (
        <StickyWrapper
            stickyIndex={1}
        >
            <div data-testid='sticky-wrapper-target'>Content 1</div>
            <div data-testid='sticky-wrapper-target'>Content 2</div>
            <div data-testid='sticky-wrapper-target'>Content 3</div>
        </StickyWrapper>
    );

    it('component renders correctly', () => {
        const { asFragment } = render(SW);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should contain all wrapped elements', () => {
        const { getByTestId, getAllByTestId } = render(SW);
        expect(getByTestId('sticky-wrapper')).toContainElement(getAllByTestId('sticky-wrapper-target')[0]);
        expect(getAllByTestId('sticky-wrapper-target').length).toEqual(3);
    });

    it('sticky element should be in the right place due to value of stickyIndex', () => {
        const { getByTestId, getByText } = render(SW);
        expect(getByTestId('sticky-wrapper-fragment')).toContainElement(getByText('Content 2'));
    });
});