import React from 'react';
import { tickers } from '../../../utils';
import { renderWithRedux } from '../../../utils/test-utils';
import { TickerListItem } from '../../../components';
import { toggleTicker } from '../../../store/actions/action-creators';
import { cleanup, fireEvent } from '@testing-library/react';

describe('Check TickerListItem component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = renderWithRedux(<TickerListItem ticker={tickers[0]} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('component should have correct text content', () => {
        const { getByTestId } = renderWithRedux(<TickerListItem ticker={tickers[0]} />);
        const element = getByTestId('ticker-list-item');
        expect(element).toHaveTextContent('AAPL');
        expect(element).toHaveTextContent('Apple Inc.');
        expect(element).toHaveTextContent('213.41');
        expect(element).toHaveTextContent('-38.72');
    });

    it('component should display negative changes correctly', () => {
        const { getByTestId } = renderWithRedux(<TickerListItem ticker={tickers[0]} />);
        expect(getByTestId('ticker-list-item-negative')).toBeInTheDocument();
        expect(getByTestId('ticker-list-item-icon-down')).toHaveClass('arrow down');
    });

    it('component should display positive changes correctly', () => {
        const { getByTestId } = renderWithRedux(<TickerListItem ticker={tickers[1]} />);
        expect(getByTestId('ticker-list-item-positive')).toBeInTheDocument();
        expect(getByTestId('ticker-list-item-icon-up')).toHaveClass('arrow up');
    });
    
    it('component should receive updated state and react correctly after click event fired', () => {
        const { getByTestId, store } = renderWithRedux(
            <TickerListItem 
                ticker={tickers[0]}
                onTickerClick={(e, { id }) => store.dispatch(toggleTicker(id))}
            />
        );
        expect(getByTestId('ticker-list-item')).not.toHaveClass('active');
        fireEvent.click(getByTestId('ticker-list-item'));
        expect(getByTestId('ticker-list-item')).toHaveClass('active');
    });
});
