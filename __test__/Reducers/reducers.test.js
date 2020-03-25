import serviceDataChanged from '../../app/reducers/isServiceDataChangedReducer';
import serviceDataUpd from '../../app/reducers/updDataFromServiceReducer';
import * as types from '../../app/actions/action-types';

describe('service data chagned price(up or down)', () => {
    it('should return initial state', () => {
        expect(serviceDataChanged(undefined, {})).toEqual({
            color: '#aaa',
        });
    });

    it('should hanle SERVICE_DATA_CHANGED_UP', () => {
        expect(serviceDataChanged({}, {
            type: types.SERVICE_DATA_CHANGED_UP,
        })).toEqual({
            color: '#92E1A0',
        });
    });

    it('should hanle SERVICE_DATA_CHANGED_DOWN', () => {
        expect(serviceDataChanged({}, {
            type: types.SERVICE_DATA_CHANGED_DOWN,
        })).toEqual({
            color: '#E13168',
        });
    });
});

describe('service data should update', () => {
    it('should return the initial state', () => {
        expect(serviceDataUpd(undefined, {})).toEqual({
            data: {},
        });
    });

    it('should handle UPDATE_DATA_FROM_SERVICE', () => {
        const serviceData1 = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '283.14',
            change: '59.18',
            change_percent: '0.65',
            last_trade_time: '2020-03-24T21:37:49.000Z',
            dividend: '0.97',
            yield: '0.51',
        };
        const serviceData2 = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '24.17',
            change: '210.68',
            change_percent: '1.1',
            last_trade_time: '2020-03-24T21:50:59.000Z',
            dividend: '0.94',
            yield: '0.14',
        };
        expect(serviceDataUpd({data: {}}, {
            type: types.UPDATE_DATA_FROM_SERVICE,
            data: serviceData1,
        })).toEqual({
            data: serviceData1,
        });
        expect(serviceDataUpd({data: {}}, {
            type: types.UPDATE_DATA_FROM_SERVICE,
            data: serviceData2,
        })).toEqual({
            data: serviceData2,
        });
    });
});
