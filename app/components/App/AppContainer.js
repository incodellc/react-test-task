import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { priceOperations } from '../../reducers/price';
import socketApi from '../../services';
import AppView from './AppView';

const mapDispatchToProps = {
    fetchPrice: priceOperations.fetchPrice,
    handlePriceRealTime: priceOperations.handlePriceRealTime,
};
const mapStateToProps = (state) => ({
    List: state.price.latest.price,
    isLoading: state.price.latest.isloading,
    isStartFetch: state.price.latest.isStartFetch,
    chartData: state.price.latest.chartData,
});
const enhancer = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withState('value', 'handleTickerChange', 'APPL'),
    withState('seconds', 'handleTickerChangeTime', '2000'),
    withHandlers({
        changePrice: (props) => () => {
            props.fetchPrice(props.value);
            props.handlePriceRealTime(props.value);
        },
        changeTime: (props) => () => {
            socketApi.setTime(props.seconds);
        },
    }),
    lifecycle({
        componentDidMount() {
            this.props.fetchPrice(this.props.value);
        },
    }),
);
export default enhancer(AppView);
