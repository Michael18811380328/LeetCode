import { lengthOfLastWord } from '../src/0058-lengthOfLastWord';

test('58-lengthOfLastWord', () => {
  expect(lengthOfLastWord('a ')).toEqual(1);
  expect(lengthOfLastWord('Hi')).toEqual(2);
  expect(lengthOfLastWord('Hello World')).toEqual(5);
  expect(lengthOfLastWord('This is JavaScript API for')).toEqual(3);
});
