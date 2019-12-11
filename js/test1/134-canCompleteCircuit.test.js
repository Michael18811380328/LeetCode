import { canCompleteCircuit } from '../finished1/134-canCompleteCircuit';

test('02-addTwoNumbers.js', () => {
  expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])).toEqual(3);
  expect(canCompleteCircuit([1,2,3], [2,3,4])).toEqual(-1);
  expect(canCompleteCircuit([2,3,4], [3,4,3])).toEqual(-1);
  expect(canCompleteCircuit([5,8,2,8], [6,5,6,6])).toEqual(3);
});
