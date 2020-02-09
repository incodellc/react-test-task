import redusers, { inititalState } from "./redusers";
import * as types from "./actionsTypes";

const tick = {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: 295.58,
    change: 110.09,
    change_percent: 0.49,
    last_trade_time: "2020-01-08T14:17:28.000Z",
    dividend: 0.91,
    yield: 1.97
};

describe("redusers", () => {
    it("expect return state", () => {
        expect(redusers()).toStrictEqual(inititalState);
    });

    describe("Types", () => {
        it("Put data", () => {
            let state = inititalState;

            for (let i = 0; i < state.historyLength + 10; i++) {
                const newState = redusers(state, { type: types.PUT_DATA, payload: { ...tick, price: tick.price + i } });

                expect(newState.data).toStrictEqual({ ...tick, price: tick.price + i });
                expect(newState.history.length).toBeLessThanOrEqual(newState.historyLength);
                state = newState;
            }
        });

        it("Reset history", () => {
            const newState = redusers(
                { ...inititalState, data: { foo: "", bar: "" }, history: [1, 2, 3] },
                { type: types.RESET_HISTORY }
            );
            expect(Object.entries(newState.data).length).toBe(0);
            expect(newState.history.length).toBe(0);
        });

        it("Set nasdaq list", () => {
            const newState = redusers(inititalState, {
                type: types.SET_NASDAQ_LIST,
                payload: [{ bar: "" }, { foo: "" }]
            });
            expect(newState.nasdaqList).toStrictEqual([{ bar: "" }, { foo: "" }]);
        });

        it("Set nasdaq current", () => {
            const newState = redusers(inititalState, { type: types.SET_NASDAQ_CURRENT, payload: { key: "AAPL" } });
            expect(newState.nasdaqCurrent).toStrictEqual({ key: "AAPL" });
        });

        it("Set connect", () => {
            const newState = redusers(inititalState, { type: types.SET_CONNECT, payload: true });
            expect(newState.connect).toBe(true);
        });

        it("Default", () => {
            const newState = redusers(inititalState, { type: "ANY" });
            expect(newState).toStrictEqual(inititalState);
        });
    });
});
