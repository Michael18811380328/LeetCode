import { singleNumberThree1, singleNumberThree2 } from '../src/137-single-number-in-three';

test('137-array has single number, others is three', () => {
  expect(singleNumberThree1([2, 2, 2, 1])).toEqual(1);
  expect(singleNumberThree1([1, 2, 1, 2, 1, 2, 4])).toEqual(4);
  expect(singleNumberThree2([2, 2, 2, 1])).toEqual(1);
  expect(singleNumberThree2([1, 2, 1, 2, 1, 2, 4])).toEqual(4);
});
