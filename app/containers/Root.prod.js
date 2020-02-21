import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import AppContainer from './AppContainer';

export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <Route path="/" render={(props)=><AppContainer {...props}/>}/>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
