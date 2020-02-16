import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { connectToStreamServer } from './store/actions/action-creators';
import { Sidebar, Segment } from 'semantic-ui-react';
import { Layout, ConnectErrorWrapper, TickerList } from './components';

const App = () => {
    const dispatch = useDispatch();
    const connectToStreamServerHandler = useCallback(() => dispatch(connectToStreamServer()), [dispatch]);

    useEffect(() => connectToStreamServerHandler(), [connectToStreamServerHandler]);

    return (
        <Layout>
            <ConnectErrorWrapper
                onReconnectClick={connectToStreamServerHandler}
            >
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
            </ConnectErrorWrapper>
        </Layout>
    );
};

export default App;