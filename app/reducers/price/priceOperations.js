import * as actions from './priceActions';
import Api from '../../Api';
import socketApi from '../../services';

// set the price state during application initialization
export function fetchPrice() {
    return async function fetchPriceThunk(dispatch) {
        try {
            dispatch(actions.fetchPrice.start());
            const res = Api.Price._price;
            dispatch(actions.fetchPrice.success(res));
        } catch (err) {
            dispatch(actions.fetchPrice.error(console.log(err)));
        }
    };
}
// set the reaction of the application when receiving data from the server
export function fetchPriceRealTime(tickerSymbol) {
    return async function fetchPriceRealTimeThunk(dispatch) {
        try {
            dispatch(actions.fetchPriceRealTime.start());
            socketApi.handlePrice(tickerSymbol, dataServer => {
                Api.Price.setPrice(dataServer);
                dispatch(actions.fetchPriceRealTime.success(dataServer));
            });
        } catch (err) {
            dispatch(actions.fetchPriceRealTime.error(console.log(err)));
        }
    };
}
// establish the relationship between server-side data and application response
export function handlePriceRealTime(tickerSymbol) {
    return async function handlePriceRealTimeThunk(dispatch) {
        dispatch(fetchPriceRealTime(tickerSymbol));
    };
}
