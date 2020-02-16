import { TICKET, successAction } from '../store/types';
const initialState = {
    data: []
};
export default function Ticket(state = initialState, action) {
    switch (action.type) {
        case successAction(TICKET):
            console.log('this is TICKER', action);
            return {
                ...state,
                data: [
                    ...(state.data.length > 9 ? state.data.slice(-9) : state.data),
                    action.data
                ]
            };
        default:
            return state;
    }
}
