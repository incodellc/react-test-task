import { PriceTickerMock } from '../app/__mocks__/priceTicker.js';
import stockTicker from '../app/reducers/index.js';

describe('stockTicker()', () => {
    let priceMock;

    beforeEach(() => {
        priceMock = PriceTickerMock();
    });

    it('ticker is updated', () => {
        const newState = stockTicker({
            prevPrice: undefined,
            ticker: undefined
        }, {
            type: 'RECEIVE_DATA',
            payload: priceMock
        });

        expect(newState.ticker).to.be.equal(priceMock);
        expect(newState.prevPrice).to.be.equal(undefined);
    });

    it('prevPrice is updated', () => {
        const newPayload = PriceTickerMock();
        const newState = stockTicker({
            prevPrice: undefined,
            ticker: priceMock
        }, {
            type: 'RECEIVE_DATA',
            payload: newPayload
        });

        expect(newState.ticker).to.be.equal(newPayload);
        expect(newState.prevPrice).to.be.equal(priceMock.price);
    });
});
