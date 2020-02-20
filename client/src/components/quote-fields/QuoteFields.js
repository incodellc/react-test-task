import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applySortParams } from '../../store/actions/action-creators';
import { sortParamsSelector, fieldsSelector } from '../../store/selectors';
import { Table } from 'semantic-ui-react';
import styles from './styles.module.css';

const QuoteFields = () => {
    const dispatch = useDispatch();
    const sortParams = useSelector(sortParamsSelector);
    const fields = useSelector(fieldsSelector);
    const applySortParamsHandler = useCallback((target) => dispatch(applySortParams(target)), [dispatch]);

    return (
        <Table
            data-testid='quote-fields'
            sortable 
            celled 
            fixed
            className={styles.quoteFields}
        >
            <Table.Header>
                <Table.Row>
                    {
                        fields.map(field => (
                            <Table.HeaderCell
                                data-testid='quote-fields-cell'
                                key={field.name}
                                disabled={!field.sortable}
                                sorted={field.name === sortParams.target ? sortParams.order : null}
                                onClick={() => applySortParamsHandler(field.name)}
                            >
                                {field.alias}
                            </Table.HeaderCell>
                        ))
                    }
                </Table.Row>
            </Table.Header>
        </Table>
    );
};

export default QuoteFields;