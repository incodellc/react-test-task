import React from 'react';
import T from 'prop-types';
import '../../styles/application.scss';
import PriceList from './components/List/PriceListView';

// The below line is here as an example of getting prices
// connect('AAPL'); priceOperations,
// const ticker = 'APPL';

function App({ isLoading, isStartFetch, handleTickerChange,
    changePrice, handleTickerChangeTime, changeTime,
    seconds, value, List, chartData }) {
    if(isLoading) {
        return (
            <div>Loading...</div>
        );
    }
    return (
        <div className="stock-ticker font-initial">
            <header className="stock-header">
                <h1>Stock Blotter</h1>
            </header>
            {(isStartFetch) ? <main className="stock-ticker_symbol">
                <div className="stock-choice_font">
                    Select Time interval:
                </div>
                <div>
                    <select className="satock-select font-initial"
                    onChange={
                        (evt) => handleTickerChangeTime(evt.target.value)}
                        value={seconds}
                    >
                        <option value="1000">1 second</option>
                        <option value="2000">2 seconds</option>
                        <option value="3000">3 seconds</option>
                        <option value="4000">4 seconds</option>
                        <option value="5000">5 seconds</option>
                        <option value="10000">10 seconds</option>
                    </select>
                    <button className="stock-button font-initial"
                    type="button"
                    onClick={changeTime}>
                        Change Interval
                    </button>
                </div>
            </main> : <main className="stock-ticker_symbol">
                <div className="stock-choice_font">
                    Please select stock symbol and put "get started"
                </div>
                <div>
                    <select className="satock-select font-initial" onChange={(evt) => handleTickerChange(evt.target.value)} value={value}>
                        <option value="APPL">Inc.(APPL)</option>
                        <option value="BEST">Inc.(BEST)</option>
                        <option value="DOW">Inc.(DOW)</option>
                        <option value="HAS">Inc.(HAS)</option>
                        <option value="OVV">Inc.(OVV)</option>
                        <option value="AMZN">Inc.(AMZN)</option>
                        <option value="NIO">Inc.(NIO)</option>
                        <option value="ACB">Inc.(ACB)</option>
                    </select>
                    {/* Or using handle input for enter stock symbol */}
                    {/* <input type="text"
                onChange={(evt) => handleTickerChange(evt.target.value)}
                value={value}/> */}
                    <button className="stock-button font-initial"
                    type="button"
                    onClick={changePrice}>
                        Get Started
                    </button>
                </div>
            </main>}
            <PriceList list={List} chartData={chartData} />
        </div>
    );
}
export default App;
App.propTypes = {
    isLoading: T.bool.isRequired,
    isStartFetch: T.bool.isRequired,
    List: T.object.isRequired,
    handleTickerChange: T.func.isRequired,
    changePrice: T.func.isRequired,
    handleTickerChangeTime: T.func.isRequired,
    changeTime: T.func.isRequired,
    seconds: T.string.isRequired,
    value: T.string.isRequired,
    chartData: T.array,
};
