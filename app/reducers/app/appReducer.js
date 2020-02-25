import { handleActions } from '@letapp/redux-actions';
import * as actions from './appActions';

const INITIAL_STATE = {
    isloading: false,
    isError: false,
    error: null,
};

export default handleActions({
    [actions.initialization.start]: (state) => ({
        ...state,
        isloading: true,
        error: null,
        isError: false,
    }),
    [actions.initialization.success]: (state) => ({
        ...state,
        isloading: false,
    }),
    [actions.initialization.error]: (state, action) => ({
        ...state,
        isloading: false,
        error: action.payload,
        isError: true,
    }),
}, INITIAL_STATE);
