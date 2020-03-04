import stockTicker from '../reducers';
const state = {
    data: {
        ticker: 'old data',
        price: '3.48'}
};
const data = {
    ticker: 'new data',
    price: '2.54'
};
it('should update state with new data (UPDATEDATA action)', () =>{
    expect(stockTicker({}, {type: 'UPDATEDATA', data})).toEqual({data});
    expect(stockTicker(state, {type: 'UPDATEDATA', data})).toEqual({data});
    expect(stockTicker(state, {type: 'UPDATEDATA', data}).data.price).toEqual('2.54');
    expect(stockTicker(state, {type: 'UPDATEDATA', data}).data.ticker).toEqual('new data');
});

it('should return current state (any other action)', () =>{
    expect(stockTicker({}, {type: 'DATA', data})).toEqual({});
    expect(stockTicker(state, {type: '', data})).toEqual(state);
    expect(stockTicker(state, {type: 'DATA', data})).toEqual(state);
    expect(stockTicker(state, {type: 'DATA', data}).data.price).toEqual('3.48');
    expect(stockTicker(state, {type: 'DATA', data}).data.ticker).toEqual('old data');
});

it('should return current state (without any action)', () =>{
    expect(stockTicker({})).toEqual({});
    expect(stockTicker(state)).toEqual(state);
    expect(stockTicker(state).data.price).toEqual('3.48');
    expect(stockTicker(state).data.ticker).toEqual('old data');
});
