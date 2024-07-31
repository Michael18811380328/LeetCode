import { compose } from '../src/2629-compose';

test('mostFrequentEven', () => {
  expect(compose([x => x + 1, x => 2 * x])(4)).toEqual(9);
  expect(compose([x => x + 1, x => x * x, x => 2 * x])(4)).toEqual(65);
  expect(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)).toEqual(1000);
  expect(compose([])(42)).toEqual(42);
});
