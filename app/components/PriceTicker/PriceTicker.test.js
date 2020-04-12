import PriceTickerUiHelper from './PriceTickerUiHelper';
const priceTickerUiHelper = new PriceTickerUiHelper();

test('Backgroung color can be green if the price is higher', () => {
    expect(priceTickerUiHelper.getColor(10, 5)).toMatch('green-background');
});
test('Backgroung color can be red if the price is less', () => {
    expect(priceTickerUiHelper.getColor(5, 10)).toMatch('red-background');
});
test('If the price values match, then the colors should remain unchanged.', () => {
    expect(priceTickerUiHelper.getColor(7, 7)).toMatch('green-background');
});


test('The direction of the arrow should show up if the price is higher, or down if it is less', () => {
    expect(priceTickerUiHelper.getArrow(10, 5)).toMatch('fa fa-angle-double-up');
});
test('The direction of the arrow should show down if the price is less', () => {
    expect(priceTickerUiHelper.getArrow(5, 10)).toMatch('fa fa-angle-double-down');
});
test('If the price values match, then the arrows should remain unchanged.', () => {
    expect(priceTickerUiHelper.getArrow(7, 7)).toMatch('fa fa-angle-double-up');
});
