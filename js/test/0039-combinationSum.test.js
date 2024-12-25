import { combinationSum, combinationSum2 } from '../src/0039-combinationSum';

describe('39.combinationSum', function() {
  it('should return [[2, 2, 3], [7]] when given [2, 3, 6, 7] and 7', function() {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });
});

describe('39.combinationSum2', function() {
  it('should return [[2, 2, 3], [7]] when given [2, 3, 6, 7] and 7', function() {
    expect(combinationSum2([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });
});
