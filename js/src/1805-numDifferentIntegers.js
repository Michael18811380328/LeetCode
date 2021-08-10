/**
 * @param {string} word
 * @return {number}
 */
// 字符串中不同整数的数目
// 这个方法需要循环一次字符串，性能不好
// 92 ms, 在所有 JavaScript 提交中击败了33.46%
var numDifferentIntegers = function(word) {
  const len = word.length;
  let numStr = '';
  let res = new Set();
  let handleStr = function(str) {
    if (str === '') return;
    str = str.replace(/^0+/ig, '');
    res.add(str);
  }
  for (let i = 0; i < len; i++) {
    let item = word[i];
    // check isNumber
    if (item > -1) {
      numStr = numStr + item;
    } else {
      handleStr(numStr);
      numStr = '';
    }
  }
  handleStr(numStr);
  return res.size;
};

// 不应该转换成数字，直接放在 set 中去重即可
// "2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410"
// 这个数字太大，超出限制了