import { combineReducers } from 'redux';
import app from './app';
import price from './price';

export default combineReducers({
    app,
    price,
});
