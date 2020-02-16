import React from 'react';
import { useSelector } from 'react-redux';
import { isConnectingSelector, isConnectedSelector } from '../../store/selectors';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ConnectErrorWrapper = ({ children, onReconnectClick }) => {
    const isConnecting = useSelector(isConnectingSelector);
    const isConnected = useSelector(isConnectedSelector);
    const gag = (
        <Segment 
            basic 
            placeholder
            className={styles.gag}
        >
            <Header 
                icon
            >
                <Icon name='frown outline' />
                Сonnection failed.
            </Header>
            <Button
                negative
                onClick={onReconnectClick}
            >
                Reconnect
            </Button>
        </Segment>
    );
    
    return isConnected ? children : isConnecting ? null : gag;
};

ConnectErrorWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    onSendRequestClick: PropTypes.func
};

export default ConnectErrorWrapper;