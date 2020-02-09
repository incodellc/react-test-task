import { Ticker } from "./ticker";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const initialState = {
    data: {},
    nasdaqList: [
        {
            key: "AAPL",
            name: "Apple Inc. Common Stock"
        },
        {
            key: "MSFT",
            name: "Microsoft Corporation Common Stock"
        }
    ],
    nasdaqCurrent: {
        key: "BABA",
        name: "Alibaba Group Holding Limited American Depositary Shares"
    },
};

const exampleData = {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: "116.60",
    change: "-0.46",
    change_percent: "-0.39",
    last_trade_time: `${new Date()}`,
    dividend: "0.57",
    difference: -2,
    yield: "1.96"
};

describe("Ticker", () => {
    let store;
    let ticker;

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn(() => fn => {
            fn();
        });
        ticker = new Ticker("http://localhost:4000", store);
    });

    it("Should set data", () => {
        ticker.onReceiveData(JSON.stringify({ ...exampleData }));
        expect(store.dispatch).toBeCalledWith({type: "PUT_DATA", payload: exampleData});
    });

    it("Should get list", async () => {
        try {
            await ticker.getList();;
            await new Promise(resolve => setTimeout((resolve), 3000))
            expect(store.dispatch).toBeCalledTimes(2);
        } catch (error) {
            console.error(error)
        }

        expect(store.dispatch).toBeCalledTimes(2);
    });

    it("Should get data", async () => {
        try {
            await ticker.getData("AAPL");
            await new Promise(resolve => setTimeout((resolve), 3000))
            expect(store.dispatch.mock.calls.length).toBeLessThanOrEqual(3);
        } catch (error) {
            console.error(error)
        }

        expect(store.dispatch.mock.calls.length).toBeLessThanOrEqual(3);
    });
});
