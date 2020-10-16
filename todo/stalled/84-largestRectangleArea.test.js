import { largestRectangleArea, largestRectangleArea2 } from './84-largestRectangleArea';

test('largestRectangleArea', () => {
  expect(largestRectangleArea([])).toEqual(0);
  expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toEqual(10);
  expect(largestRectangleArea([2, 1, 5, 6, 2, 3, 1, 2, 4, 5, 2, 3, 7, 1, 0, 1, 3, 6, 2, 5, 2])).toEqual(14);
  // expect(largestRectangleArea([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,420,421,422])).toEqual(1892);
  // 实际上这个数组长度20000，平方就是4亿，运行100s没有结果
});

test('largestRectangleArea', () => {
  expect(largestRectangleArea2([])).toEqual(0);
  expect(largestRectangleArea2([2, 1, 5, 6, 2, 3])).toEqual(10);
  expect(largestRectangleArea2([2, 1, 5, 6, 2, 3, 1, 2, 4, 5, 2, 3, 7, 1, 0, 1, 3, 6, 2, 5, 2])).toEqual(14);
  // expect(largestRectangleArea2([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120])).toEqual(3660);
  // 实际上这个数组长度20000
  // expect(largestRectangleArea2([0,2,0])).toEqual(2);
});
