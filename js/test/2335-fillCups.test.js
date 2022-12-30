import { fillCups, fillCups2 } from '../src/2335-fillCups.js';

test('fillCups', () => {
  expect(fillCups([5,4,4])).toEqual(7);
  expect(fillCups([1,4,2])).toEqual(4);
  expect(fillCups([5,0,0])).toEqual(5);

  expect(fillCups2([5,4,4])).toEqual(7);
  expect(fillCups2([1,4,2])).toEqual(4);
  expect(fillCups2([5,0,0])).toEqual(5);
});
