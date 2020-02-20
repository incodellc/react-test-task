import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTicker } from '../../store/actions/action-creators';
import { tickersSelector } from '../../store/selectors';
import { List } from 'semantic-ui-react';
import { TickerListItem } from '../../components';

const TickerList = () => {
    const dispatch = useDispatch();
    const tickers = useSelector(tickersSelector);
    const toggleTickerHandler = useCallback((e, { id }) => dispatch(toggleTicker(id)), [dispatch]);

    return (
        <List 
            data-testid='ticker-list'
            celled 
            selection 
            verticalAlign='middle'
        >
            {
                tickers.map(ticker => (
                    <TickerListItem
                        key={ticker.tickerId}
                        ticker={ticker}
                        onTickerClick={toggleTickerHandler}
                    />
                ))
            }
        </List>
    );
};

export default TickerList;