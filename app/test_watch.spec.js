import React from 'react';
import { render, cleanup, waitForElement, getByTestId, getByText, fireEvent } from '@testing-library/react';
import App from './components/App';
import {connect} from './services';
import axios from 'axios';

import io from 'socket.io-client';
import "babel-polyfill";

beforeEach(cleanup);

jest.useFakeTimers();

test('render the application', (done) => {
  const { getByText, getByTestId } = render(<App />);
  
  expect(getByText('Stock Blotter')).toBeTruthy();
  expect(getByText('Loading...')).toBeTruthy();
  expect(getByTestId('time-change-submit')).toBeTruthy();

  done()
})


test('Should change time reload request', () => {
  return axios.post('http://localhost:4000/3000').then(res => {
    expect(res.status).toBe(200);
  })
})

test('async render data test', async () => {
  const { getByText, getByTestId } = render(<App />);

  const result = [];
  connect('AAPL', (data) => { 
    result.push(data);
  });

  await waitForElement(() => [
    expect(getByTestId('info-list')).toBeTruthy(),
    expect(getByTestId('exchange')).toBeTruthy(),
  ]);
})

// test('testing change time submit form', async () => {
//   const { getByText, getByTestId } = render(<App />);

//   fireEvent.submit(getByTestId('time-change-submit'));
//   await waitForElement(() => [
//     expect(getByTestId('loading-test')).toBeTruthy(),
//   ])
// })
