import capitalizeTitle from '../src/2129-capitalizeTitle';

test('capitalizeTitle', () => {
  expect(capitalizeTitle("First leTTeR of EACH Word")).toEqual("First Letter of Each Word");
  expect(capitalizeTitle("i lOve leetcode")).toEqual("i Love Leetcode");
});
