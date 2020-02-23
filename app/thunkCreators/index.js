export const LOAD_DATA = 'LOAD_DATA';
export const SPEED_LOAD_DATA = 'SPEED_LOAD_DATA';
import {connect} from '../services';

export const addDataThunkCreator = (tickerSymbol, store) => (dispatch)=>{
    connect(tickerSymbol, dispatch, store);
};

export const changeSpeed = (speed) =>({type: SPEED_LOAD_DATA, payload: speed});
