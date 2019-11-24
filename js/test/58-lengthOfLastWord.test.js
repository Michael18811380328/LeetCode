import { lengthOfLastWord } from '../finished/58-lengthOfLastWord';

test('58-lengthOfLastWord', () => {
  expect(lengthOfLastWord('a ')).toEqual(1);
  expect(lengthOfLastWord('Hi')).toEqual(2);
  expect(lengthOfLastWord('Hello World')).toEqual(5);
  expect(lengthOfLastWord('This is JavaScript API for Seafile')).toEqual(7);
});
