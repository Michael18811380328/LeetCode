import { climbStairs } from '../src/70-climbStairs';

test('70-climbStairs', () => {
  expect(climbStairs(4)).toEqual(5);
  expect(climbStairs(10)).toEqual(89);
  expect(climbStairs(100)).toEqual(573147844013817000000);
});
