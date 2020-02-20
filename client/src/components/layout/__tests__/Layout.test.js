import React from 'react';
import { renderWithRedux } from '../../../utils/test-utils';
import { streamServerConnect, streamServerDisconnect } from '../../../store/actions/action-creators';
import { Layout } from '../../../components';
import { cleanup, fireEvent } from '@testing-library/react';

describe('Check HistoryMenu component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<Layout />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should contain expected elements and text content', () => {
        const { getByTestId, getByText, store } = renderWithRedux(<Layout><div>Content</div></Layout>);
        expect(getByTestId('layout-menu')).toBeInTheDocument();
        expect(getByTestId('layout-menu')).toContainElement(getByTestId('layout-header'));
        expect(getByTestId('layout-header')).toContainElement(getByTestId('layout-header-icon'));
        expect(getByTestId('layout-header')).toHaveTextContent('React Price Picker');
        expect(getByTestId('layout-header-icon')).toHaveClass('factory');
        expect(getByTestId('layout-menu')).toContainElement(getByTestId('layout-info-button'));
        expect(getByTestId('layout-body')).toBeInTheDocument();
        expect(getByTestId('layout-body')).toContainElement(getByTestId('info-bar'));
        expect(getByTestId('layout-body')).toContainElement(getByTestId('layout-body-dimmer'));
        store.dispatch(streamServerConnect());
        expect(getByTestId('layout-body')).toContainElement(getByText('Content'));
        store.dispatch(streamServerDisconnect());
        expect(getByTestId('layout-body')).toContainElement(getByText('Content'));
    });

    it('check info button content and behavior', () => {
        const { getByTestId } = renderWithRedux(<Layout />);
        expect(getByTestId('layout-info-button')).toHaveTextContent('Info');
        expect(getByTestId('layout-info-button')).toContainElement(getByTestId('layout-info-button-info-icon'));
        expect(getByTestId('info-bar')).not.toHaveClass('visible');
        fireEvent.click(getByTestId('layout-info-button'));
        expect(getByTestId('layout-info-button')).toHaveTextContent('Info');
        expect(getByTestId('layout-info-button')).toContainElement(getByTestId('layout-info-button-close-icon'));
        expect(getByTestId('info-bar')).toHaveClass('visible');
        fireEvent.click(getByTestId('layout-info-button'));
        expect(getByTestId('layout-info-button')).toHaveTextContent('Info');
        expect(getByTestId('layout-info-button')).toContainElement(getByTestId('layout-info-button-info-icon'));
        expect(getByTestId('info-bar')).not.toHaveClass('visible');
    });
});