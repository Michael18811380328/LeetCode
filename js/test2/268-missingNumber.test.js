import { missingNumber } from '../finished2/268-missingNumber.js';

test('judge a number is Prism', () => {
  expect(missingNumber([3,0,1])).toEqual(2);
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toEqual(8);
});
