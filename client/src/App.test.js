import React from 'react';
import { renderWithRedux } from './utils/test-utils';
import App from './App';
import { cleanup } from '@testing-library/react';
import { tickerService } from './services';
jest.mock('./services');

describe('Check App component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<App />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('if app connected component should contain correct elements', () => {
        const { getByTestId } = renderWithRedux(<App />);
        expect(getByTestId('ticker-list')).toBeInTheDocument();
        expect(getByTestId('history-menu')).toBeInTheDocument();
        expect(getByTestId('quote-fields')).toBeInTheDocument();
        expect(getByTestId('quotes-grid')).toBeInTheDocument();
    });

    it('if app disconnected component should contain correct elements', () => {
        tickerService.mockImplementationOnce((tickers, connectCallback, resultCallback, disconnectCallback) => {
            disconnectCallback();
        });
        const { getByTestId } = renderWithRedux(<App />);
        expect(getByTestId('connect-error-gag')).toBeInTheDocument();
    });
});
