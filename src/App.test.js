import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Chart } from "./components";
import { Header } from "./components";

it("renders welcome message", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header/>)).toEqual(true);
    expect(wrapper.contains(<Chart/>)).toEqual(true);
});
