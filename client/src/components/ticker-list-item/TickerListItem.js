import React, { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isTickerBannedSelector, lastQuoteByTickerSelector } from '../../store/selectors';
import { Card, Icon, List, Statistic, Transition } from 'semantic-ui-react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const TickerListItem = ({ ticker, onTickerClick }) => {
    let [visible, setVisible] = useState(true);
    let memoIsTickerBannedSelector = useMemo(() => isTickerBannedSelector, []);
    let memoLastQuoteByTickerSelector = useMemo(() => lastQuoteByTickerSelector, []);
    let isTickerBanned = useSelector(state => memoIsTickerBannedSelector(state, ticker.tickerId));
    let lastQuoteByTicker = useSelector(state => memoLastQuoteByTickerSelector(state, ticker.tickerId));

    useEffect(() => setVisible(visible => !visible), [lastQuoteByTicker]);

    return !lastQuoteByTicker
        ? null
        : (
            <Card
                data-testid='ticker-list-item'
                as={List.Item}
                className={styles.tickerListItem}
                id={ticker.tickerId}
                active={isTickerBanned}
                onClick={onTickerClick}
            >
                <Card.Content>
                    <Transition
                        animation='glow'
                        duration={2000}
                        visible={visible}
                    >
                        {lastQuoteByTicker.change < 0 
                            ?
                                <div data-testid='ticker-list-item-negative' className='right floated'>
                                    <Statistic size='mini'>
                                        <Statistic.Value>{lastQuoteByTicker.price}</Statistic.Value>
                                        <Statistic.Label><span className='pricedown'>{lastQuoteByTicker.change}</span></Statistic.Label>
                                    </Statistic>
                                    <Icon data-testid='ticker-list-item-icon-down' size='big' color='red' name='arrow down' />
                                </div>
                            :
                                <div data-testid='ticker-list-item-positive' className='right floated'>
                                    <Statistic size='mini'>
                                        <Statistic.Value>{lastQuoteByTicker.price}</Statistic.Value>
                                        <Statistic.Label><span className='priceup'>{'+' + lastQuoteByTicker.change}</span></Statistic.Label>
                                    </Statistic>
                                    <Icon data-testid='ticker-list-item-icon-up' size='big' color='green' name='arrow up' />
                                </div>
                        }
                    </Transition>
                    <Card.Header>{ticker.tickerId}</Card.Header>
                    <Card.Meta>{ticker.company}</Card.Meta>
                </Card.Content>
            </Card>
        );
};

TickerListItem.propTypes = {
    ticker: PropTypes.shape({
        tickerId: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired
    }).isRequired,
    onTickerClick: PropTypes.func
};


export default TickerListItem;