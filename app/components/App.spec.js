import React from 'react';
import App from './App';
import { createStore } from 'redux';
import createRootReducer from '../reducers'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Spin } from 'antd';

const history = createBrowserHistory();

const emptyStore = createStore(createRootReducer(history));

const setUp = (store) =>
    mount(
        <Provider store={store}>
            <App />
        </Provider>
    )

describe('should render App component', () => {
    it('should contain .stock-ticker wrapper', () => {
        const wrapper = setUp(emptyStore).find(App).find('.stock-ticker');
        expect(wrapper.length).toBe(1);
    });

    it('Store empty, should contain Spin component', () => {
        const wrapper = setUp(emptyStore).find(App).find(Spin);
        expect(wrapper.length).toBe(1);
    });
});
