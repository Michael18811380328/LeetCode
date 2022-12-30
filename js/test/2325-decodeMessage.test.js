import { decodeMessage } from '../src/2325-decodeMessage.js';

test('decodeMessage', () => {
  expect(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")).toEqual("this is a secret");
  expect(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb")).toEqual("the five boxing wizards jump quickly");
});
