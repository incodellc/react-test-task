import { connect, disconnect } from '../../services/';

export const mStP = (state) => {
    return {
        stockTicker: state.stockTicker,
        fetchInterval: state.fetchInterval,
    };
};

export const mDtP = (dispatch) => {
    return {
        init: () => {
            connect(dispatch);
        },
        dispatchWrapper: dispatch,
        disconnectFromServer: () => {
            disconnect();
        },
    };
};
