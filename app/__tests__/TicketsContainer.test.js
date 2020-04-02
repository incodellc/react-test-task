import React from 'react';
import { shallow } from 'enzyme';
import { TickersContainer } from '../containers/TickersContainer/TickersContainer';

describe('Tickets Container test ', () => {
    const props = {
        tickers: [],
        loading: false,
        error: null,
        startFetching: () => {}
    };
    describe('Tickers Container initial', () => {
        const tickersContainer = shallow(<TickersContainer {...props} />);

        it('should renders properly', () => {
            expect(tickersContainer).toMatchSnapshot();
        });
    });

    describe('Tickers Container is loading', () => {
        const nextProps = {
            ...props,
            loading: true
        };

        const tickersContainer = shallow(<TickersContainer {...nextProps} />);

        it('should renders properly', () => {
            expect(tickersContainer).toMatchSnapshot();
        });

        it ('should render preloader', () => {
            expect(tickersContainer.find('p').text()).toEqual('Loading...');
        });
    });

    describe('Tickers Container is error', () => {
        const nextProps = {
            ...props,
            error: {error: 'Unexpected error'}
        };

        const tickersContainer = shallow(<TickersContainer {...nextProps} />);

        it('should renders properly', () => {
            expect(tickersContainer).toMatchSnapshot();
        });

        it ('should render errorIndicator', () => {
            expect(tickersContainer.find('p').text()).toEqual('ERROR!!!!!!!!!!!!!');
        });
    });

    describe('Tickers Container render < TickersList />', () => {
        const nextProps = {
            ...props,
            tickers: [1]
        };

        const tickersContainer = shallow(<TickersContainer {...nextProps} />);

        it('should renders properly', () => {
            expect(tickersContainer).toMatchSnapshot();
        });

        it ('should render <TickersList /> template', () => {
            expect(tickersContainer.find('TickerList')).toHaveLength(1);
        });
    });

    describe('Tickers Container initial in componentDidMount', () => {
        const mockFetchGetItems = jest.fn();
        const nextProps = {
            ...props,
            startFetching: mockFetchGetItems
        };

        const tickersContainer = shallow(<TickersContainer {...nextProps} />);

        it('should renders properly', () => {
            expect(tickersContainer).toMatchSnapshot();
        });

        it ('should dispatches the `startFetching()` method it receives from props', () => {
            expect(mockFetchGetItems).toHaveBeenCalledTimes(1);
        });
    });

});
