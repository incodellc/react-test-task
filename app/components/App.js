import '../styles/application.scss';
import {UPDATE_STOCK_TICKER} from '../reducers/types';
import {connect as serviceConnect} from '../services';
import connect from 'react-redux/lib/components/connect';
import React, {PureComponent} from 'react';
import PricePanel from './PricePanel/PricePanel';
import SelectIntervalUpdate from './SelectIntervalUpdate/SelectIntervalUpdate';

class App extends PureComponent {
    componentDidMount() {
        serviceConnect('AAPL', this.props.updateStockTicker);
    }

    render() {
        return (
            <div className="stock-ticker">
                <SelectIntervalUpdate/>
                <PricePanel/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({stockTicker: state});
const mapDispatchToProps = (dispatch) => ({updateStockTicker: (newPriceObj) => dispatch({type: UPDATE_STOCK_TICKER, payload: newPriceObj})});

export default connect(mapStateToProps, mapDispatchToProps)(App);
