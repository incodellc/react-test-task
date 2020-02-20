import React from 'react';
import { useSelector } from 'react-redux';
import { displayedQuotesSelector } from '../../store/selectors';
import { Table } from 'semantic-ui-react';
import { QuoteRow } from '../../components';
import styles from './styles.module.css';

const QuotesGrid = () => {
    const displayedQuotes = useSelector(displayedQuotesSelector);
    return (
        <Table
            data-testid='quotes-grid'
            selectable
            celled
            fixed
            className={styles.quotesGrid}
        >
            <Table.Body>
                {
                    displayedQuotes.map(quote => (
                        <QuoteRow
                            key={`${quote.ticker}_${quote.last_trade_time}`}
                            data={quote}
                        />
                    ))
                }
            </Table.Body>
        </Table>
    );
};

export default QuotesGrid;