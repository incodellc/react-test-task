import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import {history} from '../store/configureStore';
import {ConnectedRouter} from 'react-router-redux';
import {appOperations} from '../reducers/app';
import App from '../components/App/AppContainer';


class RootConnect extends React.Component {
    constructor(props) {
        super(props);
        props.dispatch(appOperations.init());
    }
    render() {
        return (
        <div>
            <ConnectedRouter history={history}>
                <Route path="/" component={App}/>
            </ConnectedRouter>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const Root = connect(mapStateToProps)(RootConnect);

export default Root;

RootConnect.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object.isRequired,
};
