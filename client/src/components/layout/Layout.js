import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isConnectingSelector } from '../../store/selectors';
import { Sidebar, Menu, Header, Icon, Button, Dimmer, Loader } from 'semantic-ui-react';
import { InfoBar } from '../../components';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const isConnecting = useSelector(isConnectingSelector);

    return (
        <React.Fragment>
            <Menu 
                data-testid='layout-menu'
                className={styles.menu}
                borderless 
                fixed='top'
            >
                <Menu.Item>
                    <Header 
                        data-testid='layout-header'
                        as='h3' 
                        disabled
                    >
                        <Icon data-testid='layout-header-icon' name='factory' />React Price Picker
                    </Header>
                </Menu.Item>
                <Menu.Menu 
                    position='right'
                >
                    <Menu.Item>
                        <Button 
                            data-testid='layout-info-button'
                            as='a' 
                            basic 
                            circular
                            onClick={() => setVisible(!visible)} 
                        >
                            {visible 
                                ? <Icon data-testid='layout-info-button-close-icon' name='close' /> 
                                : <Icon data-testid='layout-info-button-info-icon' name='info' />
                            }
                            Info
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Sidebar.Pushable
                data-testid='layout-body'
                className={styles.pushable}
            >
                <InfoBar 
                    direction='top' 
                    animation='overlay' 
                    visible={visible} 
                />
                <Sidebar.Pusher 
                    dimmed={visible}
                >
                    {isConnecting 
                        ? <Dimmer data-testid='layout-body-dimmer' active inverted><Loader inverted>Connecting...</Loader></Dimmer>
                        : children
                    }
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;