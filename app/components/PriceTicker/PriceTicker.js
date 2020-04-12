import React from 'react';
import PriceTickerUiHelper from './PriceTickerUiHelper';
import PropTypes from 'prop-types';

class PriceTicker extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshTimeout: 0
        };
        this.lastUpdateTime = null;
        this.priceTickerUiHelper = new PriceTickerUiHelper();
        this.lastPrice = null;
    }
    shouldComponentUpdate(nextProps) {
        const currentTime = this.getCurrentTimeInSeconds();
        const { jsonResponse } = nextProps;
        const objectResponse = JSON.parse(jsonResponse);
        if (this.lastPrice !== objectResponse.price) {
            if ((currentTime - this.lastUpdateTime) >= this.state.refreshTimeout) {
                return true;
            }
        }
        return false;
    }
    getCurrentTimeInSeconds() {
        const date = new Date();
        const dateInMs = date.getTime();
        const dateInSec = dateInMs * 0.001;
        return dateInSec;
    }
    render() {
        const currentTime = this.getCurrentTimeInSeconds();
        this.lastUpdateTime = currentTime;

        const { jsonResponse } = this.props;
        const objectResponse = JSON.parse(jsonResponse);

        const backgroungColorClass = this.priceTickerUiHelper.getColor(objectResponse.price, this.lastPrice);
        const arrowSymbolClass = this.priceTickerUiHelper.getArrow(objectResponse.price, this.lastPrice);
        this.lastPrice = objectResponse.price;

        const onTimeoutChanged = (event) => {
            this.state.refreshTimeout = event.target.value;
        };
        return (
            <div className="price-ticker-container" >
                <select id="mySelect" className="_select" onChange={onTimeoutChanged}>
                    <option value="0">REAL TIME</option>
                    <option value="30">30 SEC</option>
                    <option value="60">1 MIN</option>
                </select>
                {
                    objectResponse
                        ?
                        <div id="ticker-value" className={backgroungColorClass}>
                            {objectResponse.price}
                            <i className={arrowSymbolClass}></i>
                        </div>
                        :
                        <p>Loading...</p>
                }
            </div>
        );
    }
}

export default PriceTicker;
PriceTicker.propTypes = {
    jsonResponse: PropTypes.string.isRequired
};
