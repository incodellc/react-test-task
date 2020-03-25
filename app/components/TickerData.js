import React from 'react';
import PropTypes from 'prop-types';
import {serviceDataChangedUp, serviceDataChangedDown} from '../actions/index';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    tickerData: state.updateDataFromServiceReducer.data,
    dataColor: state.isServiceDataChangedReducer.color,
});
const mapDispatchToProps = (dispatch) => ({
    dataUp: () => {
        dispatch(serviceDataChangedUp());
    },
    dataDown: () => {
        dispatch(serviceDataChangedDown());
    }
});

export class ConnectedTickerData extends React.PureComponent {

    componentDidUpdate(prevState) {
        const isServiceDataChanged = (prevData, nextData) => {
            const prev = Object.values(prevData.tickerData).filter(Number);
            const next = Object.values(nextData).filter(Number);
            if (+prev[0] > +next[0]) {
                this.props.dataDown();
            } else if (+prev[0] < +next[0]) {
                this.props.dataUp();
            }
        };
        isServiceDataChanged(prevState, this.props.tickerData);
    }

    render() {
        return (
            <React.Fragment>
                {Object.values(this.props.tickerData).map((el, idx) => {
                    return <td key={idx}><p style={idx === 2 ? {color: this.props.dataColor} : {}}>{el}</p></td>;
                })}
            </React.Fragment>
        );
    }
}

const TickerData = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedTickerData);

ConnectedTickerData.propTypes = {
    tickerData: PropTypes.object.isRequired,
    dataColor: PropTypes.string.isRequired,
    dataUp: PropTypes.func.isRequired,
    dataDown: PropTypes.func.isRequired,
};

export default TickerData;
