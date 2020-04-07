import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { TickerInfo } from '../containers';
import { Header } from '../components';
import { PageNotFound } from '../components';
import { FetchIntervalSelector } from '../containers';

import { tickersList } from '../static/constants';

export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <div>
                        <Header tickers={tickersList} />
                        <Switch>
                            <Redirect
                                exact
                                from="/"
                                to={`/${tickersList[0]}`}
                                key="/"
                            />
                            {tickersList.map((ticker) => (
                                <Route
                                    exact
                                    path={`/${ticker}`}
                                    render={(props) => (
                                        <TickerInfo
                                            ticker={ticker}
                                            {...props}
                                        />
                                    )}
                                    key={ticker}
                                />
                            ))}
                            <Route path="*" key="*" component={PageNotFound} />
                        </Switch>
                        <FetchIntervalSelector />
                    </div>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
