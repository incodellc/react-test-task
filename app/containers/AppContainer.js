import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addDataThunkCreator as loadData, changeSpeed} from '../thunkCreators';

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
    loadData: PropTypes.func,
    changeSpeed: PropTypes.func,
    spedData: PropTypes.number,
};

function mapSateToProps(state) {
    const {dataArr, spedData} = state;
    return {dataArr, spedData};
}

export default connect(mapSateToProps, {loadData, changeSpeed})(AppContainer);
