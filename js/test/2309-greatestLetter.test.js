import { greatestLetter } from '../src/2309-greatestLetter';

test('greatestLetter', () => {
  expect(greatestLetter("lEeTcOdE")).toEqual('E');
  expect(greatestLetter("arRAzFif")).toEqual('R');
  expect(greatestLetter("AbCdEfGhIjK")).toEqual('');
});

export { greatestLetter };
