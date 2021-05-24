import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../services/stock.types';
import { Options, StockItem } from '../../components';
import { Container, List } from './Styles';

const internals = [1000, 2000, 2500, 3000];

const Page = ({ updateInterval, bindStock, store }) => {
    /**
     * @type {{ stock: StockData[] }}
     */
    const { stock } = store;

    useEffect(() => {
        bindStock('AAPL');
        bindStock('GOOGLE');
    }, []);

    const onInterval = useCallback((interval) => updateInterval(+interval), []);

    return (
        <Container>
            <Options values={internals} defaultValue={1000} onSelect={onInterval} />
            <List>
                {stock.map((data) =>(<StockItem key={data.ticker} {...data} />))}
            </List>
        </Container>
    );
};

Page.propTypes = {
    updateInterval: PropTypes.func,
    bindStock: PropTypes.func,
    store: PropTypes.object,
};

import { bindStock, updateInterval } from '../../redux/actions';
const funcMap = (dispatch) => ({
    bindStock: async(name) => dispatch(bindStock(name)),
    updateInterval: async(ms) => dispatch(updateInterval(ms)),
});

const withRedux = connect((store) => ({store}), funcMap)(Page);
export { withRedux as Page };
