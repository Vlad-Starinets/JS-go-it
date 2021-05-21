const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(arr => arr % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(arr => arr % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(arr => arr % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(arr => arr % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(arr => arr % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(arr => arr % 2 !== 0);
