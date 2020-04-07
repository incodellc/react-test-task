import { PriceTickerMock } from '../app/__mocks__/priceTicker.js';
import { getPriceChanging} from '../app/selectors';

describe('getPriceChanging()', () => {
    let priceMock;
    beforeEach(() => {
        priceMock = PriceTickerMock();
    });

    it('positive price changing is returned', () => {
        const stateMock = {
            ticker: priceMock,
            prevPrice: priceMock.price - 1
        };

        expect(getPriceChanging(stateMock)).to.be.equal('positive');
    });

    it('negative price changing is returned', () => {
        const stateMock = {
            ticker: priceMock,
            prevPrice: priceMock.price + 1
        };

        expect(getPriceChanging(stateMock)).to.be.equal('negative');
    });

    it('neutral price changing is returned', () => {
        const stateMock = {
            ticker: priceMock,
            prevPrice: priceMock.price
        };

        expect(getPriceChanging(stateMock)).to.be.equal('neutral');
    });
});
