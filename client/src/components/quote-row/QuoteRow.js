import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fieldsSelector } from '../../store/selectors';
import { Table, Icon } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';

const QuoteRow = ({ data }) => {
    const fields = useSelector(fieldsSelector);

    return (
        <Table.Row
            data-testid='quote-row'
            positive={data.change >= 0}
            negative={data.change < 0}
        >
            {
                fields.map(field => (
                    <Table.Cell
                        data-testid='quote-cell'
                        key={`${data.ticker}_${data.last_trade_time}_${field.name}`}
                    >
                        {field.name === 'price'
                            ? data.change < 0 
                                ? <Icon data-testid='quote-cell-icon-down' name='arrow alternate circle down'/>
                                : <Icon data-testid='quote-cell-icon-up' name='arrow alternate circle up'/>
                            : null 
                        }
                        {field.isDate ?  moment(data[field.name]).format('DD-MM-YY HH:mm:ss') : data[field.name]}
                    </Table.Cell>
                ))
            }
        </Table.Row>
    );
};

QuoteRow.propTypes = {
    data: PropTypes.shape({
        ticker: PropTypes.string.isRequired,
        exchange: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        change: PropTypes.string.isRequired,
        change_percent: PropTypes.string.isRequired,
        last_trade_time: PropTypes.string.isRequired,
        dividend: PropTypes.string.isRequired,
        yield: PropTypes.string.isRequired
    }).isRequired
};

export default QuoteRow;