import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadData} from '../reducers/stockReducer';
import PropTypes from 'prop-types';
import {destroyData} from '../reducers/stockReducer';
import {App} from '../components/App';

// The below line is here as an example of getting prices
// connect('AAPL');

class AppContainer extends Component {

    componentDidMount() {
        this.props.loadData();
    }
    componentWillUnmount() {
        this.props.destroyData();
    }

    render() {
        return(<App prices={this.props.prices}/>);
    }
}
AppContainer.propTypes = {
    loadData: PropTypes.func,
    prices: PropTypes.array,
    destroyData: PropTypes.func
};
const mapStateToProps = (state) => ({
    prices: state.prices
});
export default connect(mapStateToProps, {loadData, destroyData})(AppContainer);

