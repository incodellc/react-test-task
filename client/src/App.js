import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectToStreamServer } from './store/actions/action-creators';
import { isConnectedSelector } from './store/selectors';
import { Sidebar, Segment } from 'semantic-ui-react';
import { Layout, TickerList } from './components';

const App = () => {
    const dispatch = useDispatch();
    const isConnected = useSelector(isConnectedSelector); 
    const connectToStreamServerHandler = useCallback(() => dispatch(connectToStreamServer()), [dispatch]);

    useEffect(() => connectToStreamServerHandler(), [connectToStreamServerHandler]);

    return (
        <Layout>
            <Sidebar.Pushable>
                <Sidebar
                    animation='push'
                    visible={true}
                >
                    <TickerList />
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment 
                        basic
                        style={{marginRight: '18.5714rem'}}
                    >

                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Layout>
    );
};

export default App;