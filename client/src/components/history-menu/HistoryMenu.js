import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoryLength, resetHistory, resetSortParams } from '../../store/actions/action-creators';
import { actualHistoryLengthSelector, historyLengthSelector, historyLengthOptionsSelector, displayedQuotesSelector, sortParamsSelector } from '../../store/selectors';
import { Menu, Dropdown } from 'semantic-ui-react';
import styles from './styles.module.css';

const HistoryMenu = () => {
    const dispatch = useDispatch();
    const actualHistoryLength = useSelector(actualHistoryLengthSelector);
    const historyLength = useSelector(historyLengthSelector);
    const historyLengthOptions = useSelector(historyLengthOptionsSelector);
    const displayedQuotes = useSelector(displayedQuotesSelector);
    const sortParam = useSelector(sortParamsSelector);
    const setHistoryLengthHandler = useCallback((e, { value }) => dispatch(setHistoryLength(value)), [dispatch]);
    const resetHistoryHandler = useCallback(() => dispatch(resetHistory()), [dispatch]);
    const resetSortParamsHandler = useCallback(() => dispatch(resetSortParams()), [dispatch]);

    return (
        <Menu
            data-testid='history-menu'
            text
            className={styles.historyMenu}
        >
            <Menu.Menu
                data-testid='history-menu-left'
                position='left'
            >
                <Menu.Item>
                    <span>Quotes shown:</span>
                    <b>{displayedQuotes.length} out of {actualHistoryLength}</b>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu
                data-testid='history-menu-right'
                position='right'
            >
                <Menu.Item>
                    <span>Max history length:</span>
                    <Dropdown
                        data-testid='history-menu-dropdown'
                        inline
                        scrolling
                        defaultValue={historyLength}
                        options={historyLengthOptions}
                        onChange={setHistoryLengthHandler}
                    />
                </Menu.Item>
                <Menu.Item 
                    data-testid='history-menu-reset-history'
                    as='a'
                    name='reset history'
                    disabled={actualHistoryLength === 0}
                    onClick={resetHistoryHandler}
                />
                <Menu.Item 
                    data-testid='history-menu-reset-sorting'
                    as='a'
                    name='reset sorting'
                    disabled={sortParam.target === null}
                    onClick={resetSortParamsHandler}
                />
            </Menu.Menu>
        </Menu>
    );
};

export default HistoryMenu;