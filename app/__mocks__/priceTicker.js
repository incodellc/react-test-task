import faker from 'faker';

export const PriceTickerMock = () => ({
    ticker: faker.company.companySuffix(),
    exchange: faker.company.companySuffix(),
    price: faker.random.number({min: 100, max: 300, precision: 2}).toString(),
    change: faker.random.number({min: 0, max: 200, precision: 2}).toString(),
    change_percent: faker.random.number({min: 0, max: 1, precision: 2}).toString(),
    last_trade_time: faker.date.recent(),
    dividend: faker.random.number({min: 0, max: 1, precision: 2}).toString(),
    yield: faker.random.number({min: 0, max: 2, precision: 2}).toString(),
});
