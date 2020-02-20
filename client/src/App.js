import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { connectToStreamServer } from './store/actions/action-creators';
import { Sidebar } from 'semantic-ui-react';
import { Layout, ConnectErrorWrapper, TickerList, StickyWrapper, QuoteFields, QuotesGrid, HistoryMenu } from './components';

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
                        <StickyWrapper 
                            stickyIndex={1}
                        >
                            <HistoryMenu />
                            <QuoteFields />
                            <QuotesGrid />
                        </StickyWrapper>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </ConnectErrorWrapper>
        </Layout>
    );
};

export default App;