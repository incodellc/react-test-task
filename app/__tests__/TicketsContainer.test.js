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

        it('should not render <p>', () => {
            expect(tickersContainer.find('p')).toHaveLength(0);
        });

        it('should not render <TickersList />', () => {
            expect(tickersContainer.find('TickerList')).toHaveLength(0);
        });
    });

    describe('Tickers Container is loading', () => {
        const nextProps = {
            ...props,
            loading: true
        };

        const tickersContainer = shallow(<TickersContainer {...nextProps} />);

        it ('should render preloader', () => {
            expect(tickersContainer.find('p').text()).toEqual('Loading...');
        });

        it ('should render only one <p>', () => {
            expect(tickersContainer.find('p')).toHaveLength(1);
        });

        it ('should not render <TickersList />', () => {
            expect(tickersContainer.find('TickerList')).toHaveLength(0);
        });
    });

    describe('Tickers Container is error', () => {
        const nextProps = {
            ...props,
            error: {error: 'Unexpected error'}
        };

        const tickersContainer = shallow(<TickersContainer {...nextProps} />);

        it ('should render errorIndicator', () => {
            expect(tickersContainer.find('p').text()).toEqual('ERROR!!!!!!!!!!!!!');
        });

        it ('should render only one <p>', () => {
            expect(tickersContainer.find('p')).toHaveLength(1);
        });

        it ('should not render <TickersList />', () => {
            expect(tickersContainer.find('TickerList')).toHaveLength(0);
        });
    });

    describe('Tickers Container render < TickersList />', () => {
        const nextProps = {
            ...props,
            tickers: [1]
        };

        const tickersContainer = shallow(<TickersContainer {...nextProps} />);

        it ('should not render <p>', () => {
            expect(tickersContainer.find('p')).toHaveLength(0);
        });

        it ('should render <TickersList /> template', () => {
            expect(tickersContainer.find('TickerList')).toHaveLength(1);
        });
    });
});
