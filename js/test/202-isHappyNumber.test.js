import { isHappy, isHappy1 } from '../src/0202-isHappyNumber';

test('202-isHappyNumber', () => {
  expect(isHappy(10)).toEqual(true);
  expect(isHappy(12580)).toEqual(true);
  expect(isHappy(145)).toEqual(false);
});

test('202-isHappyNumber', () => {
  expect(isHappy1(10)).toEqual(true);
  expect(isHappy1(12580)).toEqual(true);
  expect(isHappy1(145)).toEqual(false);
});
