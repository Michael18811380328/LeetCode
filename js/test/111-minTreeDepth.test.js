import { minDepth } from '../src/111-minTreeDepth';

// 获取最小子树的深度
test('111-minTreeDepth.test.js', () => {
  const left = { value: 2, left: null, right: null };
  const right = { value: 3, left: null, right: null };
  const tree1 = { value: 1, left, right };
  const tree2 = { value: 1, left: null, right };
  expect(minDepth(tree1)).toEqual(2);
  expect(minDepth(tree2)).toEqual(2);
});
