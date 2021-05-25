  
  // 辅助函数，判断大小写是否对应 toLowerCase）
  // 这个算法性能不好
  // Brute force and check each substring to see if it is nice.
  isBeautyStr = (str) => {
    // 0、字符串去重
    const simpleStr = [].filter.call(str,(s,i,o) => o.indexOf(s) == i).join('');
    // 如果去重后的字符串长度是奇数，那么一定不美丽
    // console.log(str, simpleStr)
    const len = simpleStr.length;
    if (len % 2 === 1) {
      return false;
    }
    // 1/ 把字符串中大写和小写分开，变成两个字符串数组
    let arr1 = [], arr2 = [];
    // 循环去重后的字符串，现在数组1中放的大写字母，数组2中放的小写字母
    for (let i = 0; i < len; i++) {
      // 正则表达式的性能不好，现在改成code比较一下
      // if (/[A-Z]/.test(simpleStr[i])) {
      const code = simpleStr[i].charCodeAt(0);
      if (code >= 65 && code <= 90) {
        arr1.push(simpleStr[i]);
      } else {
        arr2.push(simpleStr[i]);
      }
    }

    // 如果两个数组的长度不同，那么肯定不美丽
    if (arr1.length !== arr2.length) {
      return false;
    }
    // 2. 然后按照字符串的编码排序
    arr1 = arr1.sort((a, b) => a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1);
    arr2 = arr2.sort((a, b) => a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1);
    // 3. 然后把排序好的字符串，大写转换成小写，比较是否相同
    const len2 = arr1.length;
    for (let i = 0; i < len2; i++) {
      if (arr1[i].toLowerCase() !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  // 1763 最长的美好子字符串
  // 字符串的长度是100，这个算法时间复杂度可以接受
  // 1040 ms, 在所有 JavaScript 提交中击败了5.33%
  // 现在性能很差
  
  var longestNiceSubstring = function(s) {    
    // 1、判断一个字符串是否是美好字符串（辅助函数，判断大小写是否对应 toLowerCase）
    
    // 2、遍历字符串，获取最长的子字符串，这个存在性能问题，和问题一能都解决一下，避免多次求美好算法
      // 外层循环按照字符串的长度，这个从 length 循环到 2
      // 内层循环，个数是字符串的长度，这个最大是N-1
      // 如果有满足条件的子字符串，立即终止循环，返回
      // 否则返回空的字符串
    
    // 空字符串需要测试
    if (s.length < 1) {
      return '';
    }
    
    // 先判断整理是否美丽
    if (isBeautyStr(s)) {
      return s;
    }
    const len = s.length;

    // 这里增加缓存，避免多次判断同一个字符串
    let cache = {};
    
    for (let i = len - 1; i > 1; i--) {
      // i 表示子字符串的长度
      for (let j = 0; j <= len - i; j++) {
        const subStr = s.slice(j, j + i);
        // 先从缓存中获取，减少重复
        if (cache[subStr]) {
          continue;
        }
        let result = isBeautyStr(subStr);
        if (result) {
          return subStr;
        } else {
          cache[subStr] = true;
        }
      }
    }
    return '';
  }

  console.log(83, longestNiceSubstring("aAay"));
  console.log(84, longestNiceSubstring("YazaAay"));
  console.log(85, longestNiceSubstring("Bb"));
  console.log(86, longestNiceSubstring('c'));
  console.log(87, longestNiceSubstring("dDzeE"));

