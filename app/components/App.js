import '../styles/application.scss';
import 'antd/dist/antd.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setStock, setNewInterval } from '../actions';
import { Chart } from './chart/Chart';
import { StockCard } from './stockCard/StockCard';
import { Spin, Row, Col } from 'antd';

// The below line is here as an example of getting prices

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.onIntervalChange = this.onIntervalChange.bind(this);
    }

    componentDidMount() {
        this.props.setStockName('AAPL');
    }

    onIntervalChange(value) {
        this.props.setNewStockInterval(+value);
    }

    render() {
        return (
            <div className="stock-ticker">
                {
                    this.props.stocks.length === 0 ?
                        <div className="stock-ticker__empty">
                            <Spin size="large"/>
                        </div> : <div className="stock-ticker__full">
                            <h1 className="stock-ticker__header">Stock Blotter</h1>
                            <Row justify="space-around" align="middle">
                                <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}><Chart stocks={this.props.stocks} /></Col>
                                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}><StockCard lastStock={this.props.stocks.slice(-1)[0]} secondLastChange={this.props.stocks.slice(-2)[0].change_percent} onIntervalChange={this.onIntervalChange} /></Col>
                            </Row>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stocks: state.stockTicker,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setStockName: async(name) => {
            dispatch(setStock(name));
        },
        setNewStockInterval: async(interval) => {
            dispatch(setNewInterval(interval));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
