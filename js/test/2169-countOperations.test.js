import { countOperations } from '../src/2169-countOperations';

test('countOperations', () => {
  expect(countOperations(10, 10)).toEqual(1);
  expect(countOperations(2, 3)).toEqual(3);
  expect(countOperations(0, 0)).toEqual(0);
  expect(countOperations(0, 1)).toEqual(0);
});
