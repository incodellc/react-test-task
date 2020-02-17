import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fieldsSelector } from '../../store/selectors';
import { Table, Transition, Icon } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';

const QuoteRow = ({ data }) => {
    let [visible, setVisible] = useState(true);
    const fields = useSelector(fieldsSelector);

    useEffect(() => setVisible(visible => !visible), [data]);

    return (
        <Transition
            animation='glow'
            duration={1000}
            visible={visible}
        >
            <Table.Row
                positive={data.change >= 0}
                negative={data.change < 0}
            >
                {
                    fields.map(field => (
                        <Table.Cell
                            key={`${data.ticker}_${data.last_trade_time}_${field.name}`}
                        >
                            {field.name === 'price'
                                ? data.change < 0 
                                    ? <Icon name='arrow alternate circle down'/>
                                    : <Icon name='arrow alternate circle up'/>
                                : null 
                            }
                            {field.isDate ?  moment(data[field.name]).format('DD-MM-YY HH:mm:ss') : data[field.name]}
                        </Table.Cell>
                    ))
                }
            </Table.Row>
        </Transition>
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