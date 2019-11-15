import { getRow } from '../finished/119-pascals-triangle-2';

test('119-pascals-triangle2', () => {
  const result1 = [1, 1];
  const result3 = [1, 3, 3, 1];
  const result5 = [1, 5, 10, 10, 5, 1];
  expect(getRow(1)).toEqual(result1);
  expect(getRow(3)).toEqual(result3);
  expect(getRow(5)).toEqual(result5);
});
