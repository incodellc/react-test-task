import * as actions from './appActions';
import Api from '../../Api';
import socketApi from '../../services';
import { priceOperations } from '../price';

// track the response from the server
export function subscribeToSockets() {
    return async function subscribeToSocketsThunck(dispatch) {
        socketApi.handlePrice(() => dispatch(priceOperations.handlePriceRealTime()));
    };
}

// respond to application start
export function init() {
    return async function initThunk(dispatch) {
        try {
            dispatch(actions.initialization.start());
            // the first state of the application
            await Api.Price.init();
            const res = Api.Price._price;
            dispatch(actions.initialization.success(res));
            // listening to data changes from the server
            dispatch(subscribeToSockets());
        } catch (err) {
            dispatch(actions.initialization.error(console.log(err)));
        }
    };
}
