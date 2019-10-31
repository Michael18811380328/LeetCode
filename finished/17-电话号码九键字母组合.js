// 17 电话号码九键字母组合
// 在九键按键电话，写短信需要对应（2-9分别对应字母）
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 思路一：如果每一个数值遍历一次，那么时间复杂度是2N次方（不好）

// 思路二：用空间换时间
// 数字的遍历是必须的，那么结果数组中，使用新的数组迭代旧数组，这样会用到 n 个中间变量
// 1 遇到第一个2，创建一个长度是3的数组，每一个填充[abc]
// 2 遇到3，遍历上面的数组，复制每一条信息，插入对应的三条 splice(i, 1, newArray) [ad,ae,af,...];
// 执行用时 : 64 ms , 在所有 JavaScript 提交中击败了90.94% 的用户
// 内存消耗 : 33.8 MB , 在所有 JavaScript 提交中击败了23.48% 的用户
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let resultArr = [];
  if (digits.length === 0) return resultArr; // 处理传入为空
  const dir = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  // 循环数字
  while (digits.length > 0) {
    // 获取当前数字对应的字符串
    const firstNumber = digits.slice(0, 1);
    digits = digits.slice(1, digits.length);
    const firstStr = dir[firstNumber];
    // 把这个字符串加入到结果数组中
    let newResultArr = [];
    if (resultArr.length === 0) {
      resultArr = firstStr.split('');
    } else {
      for (let i = 0; i < resultArr.length; i++) {
        let item = resultArr[i];
        newResultArr.push(item + firstStr[0], item + firstStr[1], item + firstStr[2]);
        // 处理一下特殊的7和9
        if (firstStr[3]) newResultArr.push(item + firstStr[3]);
      }
      //使用新的结果数组迭代旧的结果数组
      resultArr = newResultArr; 
    }
  }
  return resultArr;
};

console.log(letterCombinations('239'));