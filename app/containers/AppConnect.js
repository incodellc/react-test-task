import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureStore, history } from '../store/configureStore';
import Root from './Root';
const store = configureStore();

function AppConnectRoot() {
    if (module.hot) {
        module.hot.accept('../containers/Root', () => {
            const newConfigureStore = require('../store/configureStore');
            const newStore = newConfigureStore.configureStore();
            const newHistory = newConfigureStore.history;
            return (
                <AppContainer>
                    <Provider store={newStore}>
                        <Root history={newHistory} />
                    </Provider>
                </AppContainer>
            );
        });
    }
    return (
        <AppContainer>
            <Provider store={store}>
                <Root history={history} />
            </Provider>
        </AppContainer>
    );
}

export default AppConnectRoot;
