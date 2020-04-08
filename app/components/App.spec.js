import {act} from 'react-dom/test-utils';
import {App} from './App';
import jsdom from 'mocha-jsdom';
import ReactDOM from 'react-dom';
import React from 'react';

jsdom({
    url: 'http://localhost:3000'
});

let rootContainer;

beforeEach(() => {
    rootContainer = document.createElement('div');
    document.body.appendChild(rootContainer);
});

afterEach(() => {
    document.body.removeChild(rootContainer);
    rootContainer = null;
});


describe("App Component Testing", () => {
    it("Component should be rendered", () => {
        act(() => {
            ReactDOM.render(<App />, rootContainer);
        });
        // assert that h1 contains Hello World
    });
});
