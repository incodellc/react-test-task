import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {connect as connectService} from '../services';

const withTickerData = WrappedComponent => {
    class TickerContainer extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                comparedNumericTicker: {
                    price: 'equal',
                    change: 'equal',
                    change_percent: 'equal',
                    dividend: 'equal',
                    yield: 'equal'
                }
            };
        }

        componentDidMount() {
            this.props.connectService(this.props.tickerName);
        }

        componentDidUpdate(prevProps) {
            if ((prevProps.stockTicker.data && this.props.stockTicker.data) && prevProps.stockTicker.data !== this.props.stockTicker.data) {
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    comparedNumericTicker: this.compareObjectsNumericValues(prevProps.stockTicker.data, this.props.stockTicker.data)
                });
            }
        }

        compareObjectsNumericValues(obj1, obj2) {
            const obj1Length = Object.keys(obj1).length;
            const obj2Length = Object.keys(obj2).length;
            let result = {};

            if (obj1Length === obj2Length) {
                Object.keys(obj1).forEach(key => {
                    let value;

                    if (!isNaN(obj1[key]) && !isNaN(obj2[key])) {
                        if (obj1[key] === obj2[key]) {
                            value = 'equal';
                        }
                        if (obj1[key] > obj2[key] || obj2[key] > obj1[key]) {
                            value = obj2[key] > obj1[key];
                        }

                        result = {
                            ...result,
                            [key]: value
                        };
                    }
                });
            }

            return result;
        }

        changeValueColor(key) {
            return {
                increased: key === true,
                decreased: !key
            };
        }

        render() {
            const { comparedNumericTicker } = this.state;
            return (
                <WrappedComponent {...this.props} comparedNumericTicker={comparedNumericTicker} changeValueColor={this.changeValueColor} />
            );
        }
    }

    const mapStateToProps = (state) => ({
        stockTicker: state.stockTicker
    });

    return connect(mapStateToProps, {connectService})(TickerContainer);
};

export default withTickerData;
