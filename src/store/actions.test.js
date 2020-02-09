import * as types from "./actionsTypes";
import * as actions from "./actions";

const map = [
    { action: actions.putData, type: types.PUT_DATA },
    { action: actions.resetHistory, type: types.RESET_HISTORY },
    { action: actions.setNasdaqList, type: types.SET_NASDAQ_LIST },
    { action: actions.setNasdaqCurrent, type: types.SET_NASDAQ_CURRENT },
    { action: actions.setConnect, type: types.SET_CONNECT }
];

describe("Actions", () => {
    map.forEach(item => {
        it(`should create an action ${item.type}`, () => {
            try {
                const payload = "Some payload";
                const expectedAction = {
                    type: item.type,
                    payload
				};
				
				expect(item.action(payload)).toEqual(expectedAction);
            } catch (error) {
				console.error(error)
			}

        });
    });
});
