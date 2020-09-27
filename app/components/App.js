import {connect as socketConnect } from '../services';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { saveTickerData } from '../actions/stockTickerActions';
import StockActivityTable from '../components/StockActivityTable/StockActivityTable';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CustomFetchIntervalForm from './CustomFetchIntervalForm/CustomFetchIntervalForm';
import './app.scss';


export class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        socketConnect('MNOV', this.props.saveTickerData );
    }

    render() {
        const { currentData } = this.props;

        return (
            <div className="stock-wrapper">
                <Header />
                {!isEmpty(currentData) && (
                    <div className="stock-wrapper__container">
                        <div className="stock-wrapper__title">Stock Activity</div>
                        <div className="stock-wrapper__content">
                            {<StockActivityTable data={currentData}/>}
                            <CustomFetchIntervalForm />
                        </div>
                    </div>
                )}
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveTickerData: (data) => dispatch(saveTickerData(data)),
    };
};

const mapStateToProps = (state) => {
    const { stockTicker } = state;
    return { currentData: stockTicker.currentData };
};

App.propTypes = {
    saveTickerData: PropTypes.func,
    stockTicker: PropTypes.shape(),
};

App.defaultProps = {
    stockTicker: {},
    saveTickerData: () => {}
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
