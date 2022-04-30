import { largestRectangleArea, largestRectangleArea1 } from '../src/0084-largestRectangleArea';

test('largestRectangleArea', () => {
  expect(largestRectangleArea([])).toEqual(0);
  expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toEqual(10);
  expect(largestRectangleArea([2, 1, 5, 6, 2, 3, 1, 2, 4, 5, 2, 3, 7, 1, 0, 1, 3, 6, 2, 5, 2])).toEqual(14);
});

test('largestRectangleArea', () => {
  expect(largestRectangleArea1([])).toEqual(0);
  expect(largestRectangleArea1([2, 1, 5, 6, 2, 3])).toEqual(10);
  expect(largestRectangleArea1([2, 1, 5, 6, 2, 3, 1, 2, 4, 5, 2, 3, 7, 1, 0, 1, 3, 6, 2, 5, 2])).toEqual(14);
});
