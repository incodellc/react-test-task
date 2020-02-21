import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addDataThunkCreator as loadData} from '../thunkCreators';

import App from '../components/App';

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.loadData('#AAPL');
    }
    render() {
        return (<App state = {this.props.dataArr}/>);
    }
}

AppContainer.propTypes = {
    dataArr: PropTypes.array,
    loadData: PropTypes.func
};

function mapSateToProps(state) {
    const {dataArr} = state;
    return {dataArr};
}

export default connect(mapSateToProps, {loadData})(AppContainer);