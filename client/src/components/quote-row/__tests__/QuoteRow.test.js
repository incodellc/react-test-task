import React from 'react';
import { fields, quotesExample } from '../../../utils';
import { renderWithRedux } from '../../../utils/test-utils';
import { QuoteRow } from '../../../components';
import { Table } from 'semantic-ui-react';
import { cleanup } from '@testing-library/react';
import moment from 'moment';

describe('Check QuoteRow component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<Table><Table.Body><QuoteRow data={quotesExample[0]} /></Table.Body></Table>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should render row of cells according to order and number of given fields', () => {
        const { getByTestId, getAllByTestId } = renderWithRedux(<Table><Table.Body><QuoteRow data={quotesExample[0]} /></Table.Body></Table>);
        const cells = getAllByTestId('quote-cell');
        expect(getByTestId('quote-row')).toContainElement(cells[0]);
        expect(cells.length).toEqual(fields.length);
        fields.forEach((field, index) => {
            expect(cells[index]).toHaveTextContent(field.isDate ? moment(quotesExample[0][field.name]).format('DD-MM-YY HH:mm:ss') : quotesExample[0][field.name]);
        });
    });

    it('component should highlight negative changes of price', () => {
        const { getByTestId } = renderWithRedux(<Table><Table.Body><QuoteRow data={quotesExample[0]} /></Table.Body></Table>);
        expect(getByTestId('quote-row')).toHaveClass('negative');
        expect(getByTestId('quote-row')).toContainElement(getByTestId('quote-cell-icon-down'));
        expect(getByTestId('quote-cell-icon-down')).toHaveClass('arrow alternate circle down');
    });
    
    it('component should highlight positive changes of price', () => {
        const { getByTestId } = renderWithRedux(<Table><Table.Body><QuoteRow data={quotesExample[1]} /></Table.Body></Table>);
        expect(getByTestId('quote-row')).toHaveClass('positive');
        expect(getByTestId('quote-row')).toContainElement(getByTestId('quote-cell-icon-up'));
        expect(getByTestId('quote-cell-icon-up')).toHaveClass('arrow alternate circle up');
    });
});