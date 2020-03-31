export const differents = (firstValue, secondValue) => {
  if (secondValue === '0') {
    return '-';
  } else {
    const result = Math.round((firstValue - secondValue) * 100) / 100;

    if (result > 0) {
      document
        .querySelector('.ticker__price-differents')
        .setAttribute('style', 'color: green');
      return `+${result}`;
    } else if (result < 0) {
      document
        .querySelector('.ticker__price-differents')
        .setAttribute('style', 'color: red');
      return `${result}`;
    }
  }
};
