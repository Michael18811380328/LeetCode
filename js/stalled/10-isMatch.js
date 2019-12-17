// 10-给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

// 删除一个字符串的开头的相同的元素
function deleteStart(s) {
  let item = s[0];
  while (s[0] === item) {
    s = s.slice(1);
  }
  return s;
}

// 删除一个字符串的某个字符
function deleteS(s, item) {
  while (s[0] === item) {
    s = s.slice(1);
  }
  return s;
}

// 然后循环P
// 如果遇到单个字符，那么减去这个字符，减去S中对应的这个字符
// 如果遇到a* 那么把S中的全部a删除，同时删除a*
// 如果遇到.* 那么直接返回真（匹配全部的情况）

function isMatch(s, p) {
  // 没有匹配标准，那么移动符合，返回true
  if (p === '' || p === '.*') {
    return true;
  }
  while (p.length > 0) {
    if (p === '.') {
      // 如果P是. 只要S的长度是1，就是真；否则就是假的
      return s.length === 1;
    }
    else if (p.length === 1) {
      // 如果P的长度是1，并且与S相等，那么返回真
      return p === s;
    }
    else if (p[0] === '.' && p[1] === '*') {
      p = p.slice(2);
      s = deleteStart(s);
    }
    else if (p[1] === '*') {
      s = deleteS(s, p[0]);
      p = p.slice(2);
    }
    else if ((p[0] === s[0]) || (p[0] === '.' && p[1] !== '*')) {
      p = p.slice(1);
      s = s.slice(1);
    } else {
      return false;
    }
  }
  return s.length === 0;
}

export { isMatch };
