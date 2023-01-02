import { divideArray } from '../src/2206-divideArray';

test('divideArray', () => {
  expect(divideArray([3,2,3,2,2,2])).toEqual(true);
  expect(divideArray([1,2,3,4])).toEqual(false);
});
