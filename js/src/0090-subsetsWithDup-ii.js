/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [90] 子集 II
// Your runtime beats 33.4 % of javascript submissions
const subsetsWithDup = function(nums) {
  const len = nums.length;
  const list = [];
  list.push([]);
  if (len === 0) {
    return list;
  } else if (len === 1) {
    list.push(nums);
    return list;
  }
  const backTrack = function(current, target, list, lastIndex) {
    const currLen = current.length;
    if (currLen === target) {
      list.push([...current]);
      return;
    }
    nums.forEach((i, index) => {
      // 应该把当前遍历的index拿过来
      if ((currLen === 0 || i >= current[currLen - 1]) && index > lastIndex) {
        current.push(i);
        backTrack(current, target, list, index);
        current.pop();
      }
    });
  };
  nums.sort((a, b) => a - b);
  for (let i = 1; i < len; i++) {
    const target = i;
    const current = [];
    backTrack(current, target, list, -1);
  }
  // 数组去重usedict
  const dict = {};
  for (let i = 1; i < list.length; i++) {
    const key = list[i].toString();
    if (dict[key]) {
      list.splice(i, 1);
      i--;
    } else {
      dict[key] = true;
    }
  }
  list.push(nums);
  return list;
};

export { subsetsWithDup };
