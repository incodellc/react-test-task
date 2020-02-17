import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoryLength } from '../../store/actions/action-creators';
import { historyLengthSelector, historyLengthOptionsSelector, displayedQuotesSelector } from '../../store/selectors';
import { Menu, Dropdown } from 'semantic-ui-react';
import styles from './styles.module.css';

const HistoryMenu = () => {
    const dispatch = useDispatch();
    const historyLength = useSelector(historyLengthSelector);
    const historyLengthOptions = useSelector(historyLengthOptionsSelector);
    const displayedQuotes = useSelector(displayedQuotesSelector);
    const setHistoryLengthHandler = useCallback((e, { value }) => dispatch(setHistoryLength(value)), [dispatch]);

    return (
        <Menu
            secondary
            className={styles.historyMenu}
        >
            <Menu.Menu
                position='left'
            >
                <Menu.Item>
                    <span>Quotes shown:</span>
                    <b>{displayedQuotes.length} out of {historyLength}</b>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu
                position='right'
            >
                <Menu.Item>
                    <span>Max history length:</span>
                    <Dropdown
                        inline
                        scrolling
                        defaultValue={historyLength}
                        options={historyLengthOptions}
                        onChange={setHistoryLengthHandler}
                    />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default HistoryMenu;