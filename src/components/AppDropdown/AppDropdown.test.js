import React from "react";
import AppDropdown from "./AppDropdown";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

const initialState = {
    nasdaqList: [
        {
            key: "BABA",
            name: "Alibaba Group Holding Limited American Depositary Shares"
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
            <AppDropdown show={true} />
        </Provider>
    );
    return { store, wrapper };
};

describe("AppDropdown component", () => {
    it("Shold change state", () => {
        const { store, wrapper } = setup(initialState);
            wrapper
            .find("DropdownItem")
            .at(0)
            .simulate("click");
        
        expect(store.dispatch).toBeCalledWith({ type: "SET_NASDAQ_CURRENT", payload: initialState.nasdaqList[0] });
        expect(store.dispatch).toBeCalledWith({ type: "SET_CONNECT", payload: true });
        expect(store.dispatch).toBeCalledWith({ type: "RESET_HISTORY" });
    });

    it("Should show loading", () => {
        const { wrapper } = setup({ ...initialState, nasdaqCurrent: {} });
        const text = wrapper
            .find(".dropdown-toggle")
            .at(1)
            .text();
        expect(text).toBe("loading...");
    });

    it("Should show nasdaqCurrent key", () => {
        const { wrapper } = setup(initialState);
        const text = wrapper
            .find(".dropdown-toggle")
            .at(1)
            .text();
        expect(text).toBe(initialState.nasdaqCurrent.key);
    });

    it("Should have items", () => {
        const { store, wrapper } = setup(initialState);
        const length = wrapper.find("DropdownItem").length;
        expect(length).toBe(store.getState().nasdaqList.length);
    });

    it("Should show nasdaqCurrent key", () => {
        const { wrapper } = setup({ ...initialState, nasdaqList: false });
        const length = wrapper.find("DropdownItem").length;
        expect(length).toBe(0);
    });
    
    console.clear()
});
