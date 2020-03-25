import * as actions from '../../app/actions/index';
import * as types from '../../app/actions/action-types';


describe('actions', () => {
    it('should create an action which is check if service data price is up', () => {
        const expectedAction = {
            type: types.SERVICE_DATA_CHANGED_UP,
        };
        expect(actions.serviceDataChangedUp()).toEqual(expectedAction);
    });

    it('should create an action which is check if service data price is down', () => {
        const expectedAction = {
            type: types.SERVICE_DATA_CHANGED_DOWN,
        };
        expect(actions.serviceDataChangedDown()).toEqual(expectedAction);
    });

    it('should create an action which is update data from service', () => {
        const serviceData = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '283.14',
            change: '59.18',
            change_percent: '0.65',
            last_trade_time: '2020-03-24T21:37:49.000Z',
            dividend: '0.97',
            yield: '0.51',
        };
        const expectedAction = {
            type: types.UPDATE_DATA_FROM_SERVICE,
            data: serviceData,
        };
        expect(actions.updateDataFromService(serviceData)).toEqual(expectedAction);
    });
});
