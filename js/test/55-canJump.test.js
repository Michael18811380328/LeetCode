import { canJump } from '../finished/55-canJump.js';

test('02-addTwoNumbers.js', () => {
  const arr1 = [2,3,1,1,4];
  const arr2 = [3,2,1,0,4];
  const arr3 = [];
  const arr4 = [0];
  const arr5 = [4,0,0,0,0];
  const arr6 = [1,0,1,0];
  expect(canJump(arr1)).toEqual(true);
  expect(canJump(arr2)).toEqual(false);
  expect(canJump(arr3)).toEqual(true);
  expect(canJump(arr4)).toEqual(true);
  expect(canJump(arr5)).toEqual(true);
  expect(canJump(arr6)).toEqual(false);
});