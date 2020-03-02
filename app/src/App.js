import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SingleTicker } from "./components/singleTicket";

export const App = () => (
  <Provider store={store}>
    <div className="App">
      <SingleTicker />
    </div>
  </Provider>
);
