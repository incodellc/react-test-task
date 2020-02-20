import React from 'react';
import { renderWithRedux } from '../../../utils/test-utils';
import { initState } from '../../../store/reducer';
import { connectToStreamServer } from '../../../store/actions/action-creators';
import { ConnectErrorWrapper } from '../../../components';
import { cleanup, fireEvent } from '@testing-library/react';
jest.mock('../../../services');

describe('Check App component', () => {
    afterEach(cleanup);

    it('component renders and behave correctly', () => {
        const { asFragment, queryByTestId, getByText, store } = renderWithRedux(
            <ConnectErrorWrapper 
                onReconnectClick={() => store.dispatch(connectToStreamServer())}
            >
                    <div>Content</div>
            </ConnectErrorWrapper>,
            { ...initState, connecting: false }
        );
        expect(asFragment()).toMatchSnapshot();
        expect(queryByTestId('connect-error-gag')).toBeInTheDocument();
        expect(queryByTestId('reconnect-button')).toBeInTheDocument();
        expect(queryByTestId('connect-error-gag')).toHaveTextContent('Сonnection failed.');
        expect(queryByTestId('reconnect-button')).toHaveTextContent('Reconnect');
        fireEvent.click(queryByTestId('reconnect-button'));
        expect(queryByTestId('connect-error-gag')).not.toBeInTheDocument();
        expect(queryByTestId('reconnect-button')).not.toBeInTheDocument();
        expect(getByText('Content')).toBeInTheDocument();
    });
});