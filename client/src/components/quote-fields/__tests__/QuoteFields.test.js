import React from 'react';
import { fields } from '../../../utils';
import { renderWithRedux } from '../../../utils/test-utils';
import { QuoteFields } from '../../../components';
import { cleanup, fireEvent } from '@testing-library/react';

describe('Check QuoteFields component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<QuoteFields />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should render row of cells witch must match the order, aliases and number of fields', () => {
        const { getByTestId, getAllByTestId } = renderWithRedux(<QuoteFields />);
        const cells = getAllByTestId('quote-fields-cell');
        expect(getByTestId('quote-fields')).toContainElement(cells[0]);
        expect(cells.length).toEqual(fields.length);
        fields.forEach((field, index) => {
            expect(cells[index]).toHaveTextContent(field.alias);
        });
    });
    
    it('component should receive updated state and react correctly after click event fired', () => {
        const { getByText } = renderWithRedux(<QuoteFields />);
        expect(getByText('Ticker')).not.toHaveClass('sorted');
        fireEvent.click(getByText('Ticker'));
        expect(getByText('Ticker')).toHaveClass('sorted ascending');
        fireEvent.click(getByText('Ticker'));
        expect(getByText('Ticker')).toHaveClass('sorted descending');
        fireEvent.click(getByText('Ticker'));
        expect(getByText('Ticker')).toHaveClass('sorted ascending');
        fireEvent.click(getByText('Price'));
        expect(getByText('Ticker')).not.toHaveClass('sorted');
        expect(getByText('Price')).toHaveClass('sorted ascending');
    });
});