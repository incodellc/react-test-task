class PriceTickerUiHelper {
    getColor(newPrice, oldPrice) {
        return (newPrice >= oldPrice) ? 'green-background' : 'red-background';
    }
    getArrow(newPrice, oldPrice) {
        return (newPrice >= oldPrice) ? 'fa fa-angle-double-up' : 'fa fa-angle-double-down';
    }
}

export default PriceTickerUiHelper;
