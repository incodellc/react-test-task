import {
    TICKET,
    successAction
} from '../types';
const initialState = {
    data: []
};
export default function Ticket(state = initialState, action) {
    switch (action.type) {
        case successAction(TICKET):
            console.log(action);
            return {
                ...state,
                data: [...state.data, action.data]
            };
    }
}
