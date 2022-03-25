import { maxProduct, maxProduct2 } from '../src/0318-maxProduct';

test('maxProduct', () => {
  expect(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"])).toEqual(16);
  expect(maxProduct(["a","ab","abc","d","cd","bcd","abcd"])).toEqual(4);
  expect(maxProduct(["a","aa","aaa","aaaa"])).toEqual(0);
  
  expect(maxProduct2(["abcw","baz","foo","bar","xtfn","abcdef"])).toEqual(16);
  expect(maxProduct2(["a","ab","abc","d","cd","bcd","abcd"])).toEqual(4);
  expect(maxProduct2(["a","aa","aaa","aaaa"])).toEqual(0);
});
