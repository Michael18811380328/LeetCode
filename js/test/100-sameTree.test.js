import { isSameTree, isSameArray } from '../src/100-sameTree';

test('100-is-same-array', () => {
  expect(isSameArray([1, 2, 3], [1, 2, 3])).toEqual(true);
  expect(isSameArray([1, 2, 3], [1, null, 3])).toEqual(false);
});

test('100-is-same-tree', () => {
  const left = { value: 2, left: null, right: null };
  const right = { value: 3, left: null, right: null };
  const tree1 = { value: 1, left, right };
  const tree2 = { value: 1, left, right };
  const tree3 = { value: 1, left: null, right };
  expect(isSameTree(tree1, tree2)).toEqual(true);
  expect(isSameTree(tree1, tree3)).toEqual(false);
});
