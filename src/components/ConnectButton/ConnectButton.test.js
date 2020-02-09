import React from "react";
import ConnectButton from "./ConnectButton";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

const initialState = {
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
    connect: false
};

const setup = state => {
    const store = mockStore(state);

    store.dispatch = jest.fn(() => fn => {
        fn();
    });
    const wrapper = mount(
        <Provider store={store}>
            <ConnectButton />
        </Provider>
    );
    return { store, wrapper };
};

describe("Connect btn", () => {
    it("should change connect to true", () => {
        const { store, wrapper } = setup(initialState);
        
        wrapper
            .find('[data-testid="connect-button"]')
            .at(0)
            .simulate("click");

        expect(store.dispatch).toBeCalledWith({ payload: true, type: "SET_CONNECT" });
    });

    it("should change connect to false", () => {
        const { store, wrapper } = setup({ ...initialState, connect: true });

        wrapper
            .find('[data-testid="disconnect-button"]')
            .at(0)
            .simulate("click");
        expect(store.dispatch).toBeCalledWith({ payload: false, type: "SET_CONNECT" });
    });
});
