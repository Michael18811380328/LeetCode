import { minCostClimbingStairs } from '../src/0746-minCostClimbingStairs';

test('746-minCostClimbingStairs', () => {
  expect(minCostClimbingStairs([10,15,20])).toEqual(15);
  expect(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])).toEqual(6);
});
