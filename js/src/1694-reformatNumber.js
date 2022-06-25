/**
 * @param {string} number
 * @return {string}
 */
// 76 ms, 在所有 JavaScript 提交中击败了 100.00%
const reformatNumber = function(number) {
  // 先把空格和破折号去掉
  // 循环当前的字符串，每个三个放在一个数组中
  // 如果数组的最后一个长度是1，那么把最后两个单独拿出来处理
  // 然后数组进行join合并处理
  number = number.replace(/\-/ig, '').replace(/\s/ig, '');
  const len = number.length;
  const arr = [];
  for (let i = 0; i < len; i += 3) {
    const item = number.slice(i, i + 3);
    arr.push(item);
  }
  if (arr[arr.length - 1].length === 1) {
    const l1 = arr.pop();
    const l2 = arr.pop();
    const item = `${l2.slice(0, 2)}-${l2.slice(2)}${l1}`;
    arr.push(item);
  }
  return arr.join('-');
};

export { reformatNumber };
