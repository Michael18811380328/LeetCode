// 1122. 数组的相对排序
// 给你两个数组，arr1 和 arr2，

// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

// 示例：
// 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// 输出：[2,2,2,1,4,3,3,9,6,7,19]

// 提示：
// arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// arr2 中的元素 arr2[i] 各不相同
// arr2 中的每个元素 arr2[i] 都出现在 arr1 中

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  // 思路：循环一次，把arr1中统计出现次数放在一个字典中
  // 然后遍历arr2,并增加对应的数量，删除字典中的属性
  // 把字典中剩余的键值对创建一个新的数组，然后升序排列(或者设置两个字典)
  // 把两个数组合并，返回新的数组
  const dict = {}; // arr2的键值对
  const arr3 = []; // 其他的项
  for (let i = 0; i < arr2.length; i++) {
    const key = arr2[i];
    dict[key] = 0;
  }
  for (let j = 0; j < arr1.length; j++) {
    const key = arr1[j];
    if (dict[key] > -1) {
      dict[key] = dict[key] + 1;
    } else {
      arr3.push(key);
    }
  }
  arr3.sort((a, b) => a - b);
  // arr2 dict
  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    if (dict[item]) {
      const value = dict[item];
      // 这里创建一个新的数组，然后加进去
      const tmp = new Array(value - 1).fill(item);
      arr2.splice(i, 0, ...tmp);
      delete dict[item];
    }
  }
  return arr2.concat(arr3);
};

export { relativeSortArray };
