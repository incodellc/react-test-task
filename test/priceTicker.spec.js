import React from 'react';
import { PriceTickerMock } from '../app/__mocks__/priceTicker.js';
import Price from '../app/components/Price';
import { render } from '@testing-library/react';
import chai from 'chai';

const expect = chai.expect;

describe('<Price/>', () => {
    describe('price is displayed', () => {
        let priceMock;
        beforeEach(() => {
            priceMock = PriceTickerMock();
        });

        it('price is displayed', () => {
            const renderResult = render(<Price tickerData={priceMock} />);

            const priceElement = renderResult.getByText(`$${priceMock.price}`);

            expect(priceElement).not.to.be.null;
        });

        it('change field is displayed', () => {
            const renderResult = render(<Price tickerData={priceMock} />);

            const changeElement = renderResult.getByText(priceMock.change);

            expect(changeElement).not.to.be.null;
        });

        it('change percent field is displayed', () => {
            const renderResult = render(<Price tickerData={priceMock} />);

            const changePercentElement = renderResult.getByText(`${priceMock.change_percent}%`);

            expect(changePercentElement).not.to.be.null;
        });
    });
})
;
