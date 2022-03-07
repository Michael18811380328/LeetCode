/**
 * @param {number} n
 * @return {string[]}
 */

const Fizz = 'Fizz';
const Buzz = 'Buzz';
const FiBu = 'FizzBuzz';

const judge = (num) => {
  if (num % 5 === 0 && num % 3 === 0) {
    return FiBu;
  } else if (num % 5 === 0) {
    return Buzz;
  } else if (num % 3 === 0) {
    return Fizz;
  } else {
    return String(num);
  }
};

const fizzBuzz = function(n) {
  if (n === 0) return [];
  const res = [];
  for (let i = 1; i < n + 1; i++) {
    const item = judge(i);
    res.push(item);
  }
  return res;
};
