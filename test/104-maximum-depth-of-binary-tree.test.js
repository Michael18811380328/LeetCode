import { maxDepth } from '../finished/104-maximum-depth-of-binary-tree';

test('104-maximum-depth-of-binary-tree', () => {
  const nullNode = { value: 1, left: null, right: null };
  const leftNode = { value: 1, left: nullNode, right: nullNode };
  const node = { value: 1, left: leftNode, right: nullNode };
  expect(maxDepth(node)).toEqual(3);
});
