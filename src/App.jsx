import React from "react";
import { Provider } from "react-redux";
import store from "./store/store"
import { Chart } from "./components";
import { Header } from "./components";

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Chart />
        </Provider>
    );
};

export default App;
