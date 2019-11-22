import { reverseWords } from '../finished1/151-reverseWords';

test('151-reverse words and delete space', () => {
  expect(reverseWords('a good   example')).toEqual('example good a');
  expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
  expect(reverseWords('  hello world!  ')).toEqual('world! hello');
});
