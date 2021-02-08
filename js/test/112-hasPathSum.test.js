import { hasPathSum } from '../src/112-hasPathSum';

// 获取最小子树的深度
test('112-hasPathSum.js', () => {
  const left = { val: 2, left: null, right: null };
  const right = { val: 3, left: null, right: null };
  const tree1 = { val: 1, left, right };
  const tree2 = { val: 1, left: null, right };
  expect(hasPathSum(tree1, 4)).toEqual(true);
  expect(hasPathSum(tree2, 20)).toEqual(false);
});
