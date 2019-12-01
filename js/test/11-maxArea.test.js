import { maxArea } from '../finished/11-maxArea.js';

test('11-maxArea.test.js', () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
  expect(maxArea([1,2,3,4,5,6,7,6,5,4,3,2,1])).toEqual(24);
  expect(maxArea([1,4])).toEqual(1);
  expect(maxArea([1,2,3,4,8,8,1,2,6,2,4,6,1,3,5,0,1,2,5,6,7,6,5,4,3,2,1])).toEqual(112);  
});