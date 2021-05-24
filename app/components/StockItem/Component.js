import React from 'react';
import PropTypes from 'prop-types';

import '../../services/stock.types';
import { Container, Field, Border, Name, Exchange, FieldBlock } from './styles';

/**
 * @param {StockData} props
 */
export const Component = ({ ticker, exchange, price, change, changePercent, lastTradeTime, dividend, yieldValue }) => {
    return (
        <Border>
            <Container>
                <Field><Name>Name:</Name> {ticker} </Field>
                <Field><Exchange>{exchange}</Exchange></Field>
                <FieldBlock>
                    <Field>{price}</Field>
                    <Field>{change}</Field>
                    <Field>{changePercent}</Field>
                </FieldBlock>
                <FieldBlock>
                    <Field>{lastTradeTime}</Field>
                    <Field>{dividend}</Field>
                    <Field>{yieldValue}</Field>
                </FieldBlock>
            </Container>
        </Border>
    );
};

Component.propTypes = {
    ticker: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    changePercent: PropTypes.string.isRequired,
    lastTradeTime: PropTypes.string.isRequired,
    dividend: PropTypes.string.isRequired,
    yieldValue: PropTypes.string.isRequired,
};
