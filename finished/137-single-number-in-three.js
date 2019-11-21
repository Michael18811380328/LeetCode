// 137. 只出现一次的数字(版本二)
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现三次。找出那个只出现了一次的元素。
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 输入: [2,2,2,1] 输出: 1
// [1,2,1,2,1,2,4] 输出: 4

// 方法一：遍历一次数组，在另一个对象中保存元素出现的次数（是否出现）；然后获取这个元素
// 72 ms, 在所有 javascript 提交中击败了 81.44%
function singleNumberThree1(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const obj = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === 0 || obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
}

// 方法二：
// 68 ms, 在所有 javascript 提交中击败了 89.82%
function singleNumberThree2(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const obj = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === 0 || obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  // for in 会遍历到全部原型链上的属性
  const res = Object.keys(obj).filter((key) => {
    if (obj[key] === 1) {
      return obj[key];
    }
  });
  return Number(res[0]);
}

export { singleNumberThree1, singleNumberThree2 };
