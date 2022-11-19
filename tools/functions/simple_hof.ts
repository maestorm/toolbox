// write one method taking both two parameters at one and also as higher order function
// https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/

const sumOfTwo = (x) => (y) => x + y;
const wrapperSumOfTwo = (...x) => x.length > 1 ? sumOfTwo(x[0])(x[1]) : sumOfTwo(x[0],x[1]);

console.log(wrapperSumOfTwo(1)(2));