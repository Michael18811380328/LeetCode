// 443. 压缩字符串
// 给定一组字符，使用原地算法将其压缩。
// 压缩后的长度必须始终小于或等于原数组长度。
// 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。
// 在完成原地修改输入数组后，返回数组的新长度。

// 思路一：使用循环，如果i === i+1 那么把当前出现的次数记录在对象中，然后把这个元素删除
// 当这个元素和后一个元素不等时，把这个元素出现的次数splice到原始数组中
// 80 ms , 在所有 javascript 提交中击败了 87.03%

function compressString(chars) {
  let timer = 1;
  for (let i = 0; i < chars.length;) {
    if (chars[i] !== chars[i + 1]) {
      if (timer > 1) {
        chars.splice(i + 1, 0, timer);
        timer = 1;
      }
      i++;
    } else {
      chars.splice(i, 1);
      timer++;
    }
  }
  for (let i = 0; i < chars.length;) {
    if (typeof chars[i] === 'number') {
      if (chars[i] < 10) {
        chars[i] = String(chars[i]);
      } else {
        const newItems = (`${chars[i]}`).split('');
        chars.splice(i, 1, ...newItems);
        i += 2;
      }
    }
    i++;
  }
  return chars.length;
}

// 思路二：使用循环(不适合这道题)
// 如果一个项的 indexOf lastIndexOf 然后计算出现的次数，然后直接使用splice取代
// 如果只出现了一次，不用处理
// 第二种方法适应于相同元素比较多的情况
// indexOf 的第二个参数是开始的位置，这里可以优化成外循环的位置
// 这种方法适合没有有序数组，如果数组前后重复了就出错了
/**
 * @param {character[]} chars
 * @return {number}
 */
function compressStringBug(chars) {
  for (let i = 0; i < chars.length; i++) {
    const item = chars[i];
    const firstIndex = chars.indexOf(item, i);
    const lastIndex = chars.lastIndexOf(item);
    if (firstIndex !== lastIndex) {
      const times = lastIndex - firstIndex + 1;
      const newItems = (`${times}`).split('');
      chars.splice(firstIndex + 1, times - 1, ...newItems);
    }
  }
  return chars.length;
}

export { compressString, compressStringBug };
