const getRandomNumberSimple = (numberFrom, numberNext) => {
  if (numberFrom >= 0 && numberNext >= 0 && numberFrom < numberNext) {
    const randomSimple = Math.random() * (numberNext - numberFrom) + numberFrom;
    return Number(Math.trunc(randomSimple));
  }
  return new TypeError('Некоректно указанны данные');
};

const getRandomNumberFloat = (numberFrom, numberNext, numberFloat = 0) => {
  if (numberFrom >= 0 && numberNext >= 0 && numberFrom < numberNext && numberFloat >= 0) {
    const randomFloat = (Math.random() * (numberNext - numberFrom) + numberFrom).toFixed(numberFloat);
    return Number(randomFloat);
  }
  return new TypeError('Некоректно указанны данные');
};

getRandomNumberSimple(2.1, 9.5);
getRandomNumberFloat(6, 5, 3);
