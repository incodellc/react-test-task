import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { priceOperations } from '../../../../../reducers/price';
import PriceListView from './PriceListView';

const mapDispatchToProps = {
    handlePriceRealTime: priceOperations.handlePriceRealTime,
};
const mapStateToProps = (state) => ({
    List: state.price.latest.price,
    chartData: state.price.latest.chartData, 
});
const enhancer = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    lifecycle({
        componentDidMount() {
            this.props.handlePriceRealTime(this.props.value);
        },
    }),
);
export default enhancer(PriceListView);
