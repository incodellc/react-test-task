import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectToStreamServer, toggleTicker } from './store/actions/action-creators';
import { tickersSelector } from './store/selectors';
import { Sidebar, Segment } from 'semantic-ui-react';
import { Layout, TickerList, TickerListItem } from './components';

const App = () => {
    const dispatch = useDispatch();
    const tickers = useSelector(tickersSelector);
    const connectToStreamServerHandler = useCallback(() => dispatch(connectToStreamServer()), [dispatch]);
    const toggleTickerHandler = useCallback((e, { id }) => dispatch(toggleTicker(id)), [dispatch]);

    useEffect(() => connectToStreamServerHandler(), [connectToStreamServerHandler]);

    return (
        <Layout>
            <Sidebar.Pushable>
                <Sidebar
                    animation='push'
                    visible={true}
                >
                    <TickerList>
                        {
                            tickers.map(ticker => (
                                <TickerListItem
                                    key={ticker.tickerId}
                                    ticker={ticker}
                                    onTickerClick={toggleTickerHandler}
                                />
                            ))
                        }
                    </TickerList>
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