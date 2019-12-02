import { hasPathSum } from './112-hasPathSum.js';

// 获取最小子树的深度
test('112-hasPathSum.js', () => {
  const left = { value: 2, left: null, right: null };
  const right = { value: 3, left: null, right: null };
  const tree1 = { value: 1, left, right };
  const tree2 = { value: 1, left: null, right };
  expect(hasPathSum(tree1, 4)).toEqual(true);
  expect(hasPathSum(tree2, 20)).toEqual(false);
});
