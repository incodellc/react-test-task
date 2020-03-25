import {combineReducers} from 'redux';
import updateDataFromServiceReducer from '../reducers/updDataFromServiceReducer';
import isServiceDataChangedReducer from '../reducers/isServiceDataChangedReducer';
const rootReducer = combineReducers({
    updateDataFromServiceReducer,
    isServiceDataChangedReducer,
});
export default rootReducer;
