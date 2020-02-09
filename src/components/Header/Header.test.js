import React from "react";
import Header from "./Header";
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
        },
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
            <Header />
        </Provider>
    );
    return { store, wrapper };
};

describe("Header component", () => {
    it("Component should render", () => {
        const { wrapper } = setup(initialState);
        expect(wrapper.find('[data-testid="header"]').length).toBe(1);
    });
});
