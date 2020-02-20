import React from 'react';
import { quotesExample } from '../../../utils';
import { renderWithRedux } from '../../../utils/test-utils';
import { HistoryMenu } from '../../../components';
import { resetHistory, resetSortParams, updateQuotes, applySortParams } from '../../../store/actions/action-creators';
import { cleanup, fireEvent } from '@testing-library/react';

describe('Check HistoryMenu component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<HistoryMenu />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should contain expected elements and text content', () => {
        const { getByTestId } = renderWithRedux(<HistoryMenu />);
        expect(getByTestId('history-menu')).toContainElement(getByTestId('history-menu-left'));
        expect(getByTestId('history-menu')).toContainElement(getByTestId('history-menu-right'));
        expect(getByTestId('history-menu')).toContainElement(getByTestId('history-menu-dropdown'));
        expect(getByTestId('history-menu')).toContainElement(getByTestId('history-menu-reset-history'));
        expect(getByTestId('history-menu')).toContainElement(getByTestId('history-menu-reset-sorting'));
        expect(getByTestId('history-menu-left')).toHaveTextContent('Quotes shown:');
        expect(getByTestId('history-menu-left')).toHaveTextContent('10 out of 10');
        expect(getByTestId('history-menu-right')).toHaveTextContent('Max history length:');
    });
    it('check max history dropdown content an behavior', () => {
        const { getByRole, getAllByRole, store } = renderWithRedux(<HistoryMenu />);
        store.getState().historyLengthOptions.forEach((element, index) => {
            expect(getAllByRole('option')[index]).toHaveTextContent(element.text);
        });
        expect(getByRole('alert')).toHaveTextContent('100 quotes');
        fireEvent.click(getAllByRole('option')[1]);
        expect(getByRole('alert')).toHaveTextContent('200 quotes');
        fireEvent.click(getAllByRole('option')[0]);
        expect(getByRole('alert')).toHaveTextContent('100 quotes');
    });
    it('check reset history menu item content an behavior', () => {
        const { getByTestId, store } = renderWithRedux(<HistoryMenu />);
        expect(getByTestId('history-menu-reset-history')).toHaveTextContent('Reset History');
        expect(getByTestId('history-menu-reset-history')).not.toHaveClass('disabled');
        store.dispatch(resetHistory());
        expect(getByTestId('history-menu-reset-history')).toHaveTextContent('Reset History');
        expect(getByTestId('history-menu-reset-history')).toHaveClass('disabled');
        store.dispatch(updateQuotes(quotesExample[0]));
        expect(getByTestId('history-menu-reset-history')).toHaveTextContent('Reset History');
        expect(getByTestId('history-menu-reset-history')).not.toHaveClass('disabled');
    });
    it('check reset sort params menu item content and behavior', () => {
        const { getByTestId, store } = renderWithRedux(<HistoryMenu />);
        expect(getByTestId('history-menu-reset-sorting')).toHaveTextContent('Reset Sorting');
        expect(getByTestId('history-menu-reset-sorting')).toHaveClass('disabled');
        store.dispatch(applySortParams('ticker'));
        expect(getByTestId('history-menu-reset-sorting')).toHaveTextContent('Reset Sorting');
        expect(getByTestId('history-menu-reset-sorting')).not.toHaveClass('disabled');
        store.dispatch(resetSortParams());
        expect(getByTestId('history-menu-reset-sorting')).toHaveTextContent('Reset Sorting');
        expect(getByTestId('history-menu-reset-sorting')).toHaveClass('disabled');
    });
});