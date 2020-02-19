/* eslint-disable no-shadow */
/* eslint-disable eol-last */
/* eslint-disable quotes */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, getByTestId, getByText, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';
import TickerSelector from '../components/TickersSelector';
// eslint-disable-next-line no-unused-vars
import { connect } from '../services';
import axios from 'axios';


test('must be relevant text', () => {
    const { getByText } = render(<App />);
    const exactText = getByText('Stocks');
    expect(exactText.textContent).toEqual('Stocks');
});

test('must load the services server with OK status', () => {
    return axios.get('http://127.0.0.1:4000')
        .then(res => {
            expect(res.status).toBe(200);
        });
});

test('must be true date', () => {
    // eslint-disable-next-line no-unused-vars
    const { getByTestId } = render(<App />);
    const currDate = getByTestId("curr-date");
    expect(currDate.textContent).toBeTruthy();
});

test('select have to show values correctly', () => {
    // eslint-disable-next-line no-unused-vars
    const { getByText, getByTestId } = render(<TickerSelector />);
    expect(getByTestId('selector-click')).toHaveValue('AAPL');
    expect(document.querySelector('.ticker')).toBeInstanceOf(HTMLElement);
});