import stockTicker from '../reducers/index';

const state1 = {
    data: {ticker: 'data1', price: 'price1'},
    oldPrice: '0'
};
const state2 = {
    data: {ticker: 'data2', price: 'price2'},
    oldPrice: 'price1'
};
const data = '{"ticker": "new data", "price": "new price"}';
const dataJSON = JSON.parse(data);

it('should update state with new data (UPDATEDATA action)', () =>{
    expect(stockTicker({}, {type: 'UPDATEDATA', data})).toEqual({data: dataJSON,  oldPrice: '0'});
    expect(stockTicker(state1, {type: 'UPDATEDATA', data}).data.price).toEqual('new price');
    expect(stockTicker(state1, {type: 'UPDATEDATA', data}).oldPrice).toEqual('price1');
    expect(stockTicker(state2, {type: 'UPDATEDATA', data}).data.ticker).toEqual('new data');
    expect(stockTicker(state2, {type: 'UPDATEDATA', data}).oldPrice).toEqual('price2');
    expect(stockTicker(state2, {type: 'UPDATEDATA', data}).data.price).toEqual('new price');
});

it('should return current state (any other action)', () =>{
    expect(stockTicker({}, {type: '@@INIT', data})).toEqual({});
    expect(stockTicker(state1, {type: 'DATA', data})).toEqual(state1);
    expect(stockTicker(state1, {type: 'DATA', data}).data.price).toEqual('price1');
    expect(stockTicker(state1, {type: 'DATA', data}).data.ticker).toEqual('data1');
});

it('should return current state (without any action)', () =>{
    expect(stockTicker()).toEqual({});
    expect(stockTicker(state1)).toEqual(state1);
    expect(stockTicker(state1).data.price).toEqual('price1');
    expect(stockTicker(state1).data.ticker).toEqual('data1');
});
