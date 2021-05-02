import React from 'react';
import * as redux from 'react-redux';
import ReactDOM from 'react-dom';
import DropDown from './DropDown';

it('DropDown component renders without crashing', () => {
    // eslint-disable-next-line no-undef
    const spy = jest.spyOn(redux, 'useDispatch');
    spy.mockReturnValue({
        AAPL: {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '270.77',
            change: '120.59',
            changePercent: '0.75',
            lastTradeTime: '2021-05-02T05:01:57.000Z',
            dividend: '0.17',
            yield: '0.10',
            color: 'green',
        }
    });
    const div = document.createElement('div');
    ReactDOM.render(<DropDown/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

