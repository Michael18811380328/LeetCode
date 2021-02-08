import { trapRain } from '../src/42-trapRain';

test('42-trapRain-hard', () => {
  expect(trapRain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  expect(trapRain([1, 0, 2, 0, 2, 3])).toEqual(3);
  expect(trapRain([3, 0, 2, 0, 2])).toEqual(4);
  expect(trapRain([0, 1, 0, 2, 0, 2, 3, 0, 0, 3, 1, 2, 0, 0, 1, 0])).toEqual(12);
});
