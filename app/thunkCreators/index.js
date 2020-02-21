export const LOAD_DATA = 'LOAD_DATA';
import {connect} from '../services';

export const addDataThunkCreator = (tickerSymbol) => (dispatch)=>{
    connect(tickerSymbol, dispatch);
};
