import socketApi from '../services';

export const Price = {
    _price: {},
    init() {
        socketApi.init();
        this._price = {};
    },
    setPrice(data) {
        this.getPrice(data);
    },
    getPrice(data) {
        this._price = data;
        return this._price;
    },
};
