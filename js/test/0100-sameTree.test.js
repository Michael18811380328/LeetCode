import { isSameTree, isSameArray } from '../src/0100-sameTree';
import TreeNode from './tree-node';

test('0100-is-same-array', () => {
  expect(isSameArray([1, 2, 3], [1, 2, 3])).toEqual(true);
  expect(isSameArray([1, 2, 3], [1, null, 3])).toEqual(false);
});

test('0100-is-same-tree', () => {
  const left = { value: 2, left: null, right: null };
  const right = { value: 3, left: null, right: null };
  const tree1 = { value: 1, left, right };
  const tree2 = { value: 1, left, right };
  const tree3 = { value: 1, left: null, right };
  expect(isSameTree(tree1, tree2)).toEqual(true);
  expect(isSameTree(tree1, tree3)).toEqual(false);
});


test('isSameTree returns true for empty trees', () => {
  const tree1 = null;
  const tree2 = null;
  expect(isSameTree(tree1, tree2)).toBe(true);
});

test('isSameTree returns false for one empty tree', () => {
  const tree1 = new TreeNode(1);
  const tree2 = null;
  expect(isSameTree(tree1, tree2)).toBe(false);
});

test('isSameTree returns false for different values', () => {
  const tree1 = new TreeNode(1);
  const tree2 = new TreeNode(2);
  expect(isSameTree(tree1, tree2)).toBe(false);
});

test('isSameTree returns true for the same tree', () => {
  const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(isSameTree(tree1, tree2)).toBe(true);
});
