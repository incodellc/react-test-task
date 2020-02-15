import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { connectToStreamServer } from './store/actions/action-creators';
import { Layout } from './components';

const App = () => {
    const dispatch = useDispatch();
    const connectToStreamServerHandler = useCallback(() => dispatch(connectToStreamServer()), [dispatch]);

    useEffect(() => connectToStreamServerHandler(), [connectToStreamServerHandler]);

    return (
        <Layout>
            <div></div>
        </Layout>
    );
};

export default App;