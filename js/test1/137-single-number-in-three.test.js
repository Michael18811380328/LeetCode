import { singleNumberThree1 } from '../finished1/137-single-number-in-three';

test('137-array has single number, others is three', () => {
  expect(singleNumberThree1([2, 2, 2, 1])).toEqual(1);
  expect(singleNumberThree1([1, 2, 1, 2, 1, 2, 4])).toEqual(4);
});
