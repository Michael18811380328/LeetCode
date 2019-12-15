// 136. 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 输入: [2,2,1] 输出: 1
// [4,1,2,1,2] 输出: 4

// 最终，方法一最好
// 方法一：遍历一次数组，在另一个对象中保存元素出现的次数（是否出现）；然后获取这个元素
// 76 ms, 在所有 javascript 提交中击败了71.40%
function singleNumber1(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const obj = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === 0 || obj[item]) {
      delete obj[item];
    } else {
      obj[item] = item;
    }
  }
  for (const key in obj) {
    if (key) {
      return Number(key);
    }
  }
}

// 方法二：遍历数组，通过indexOf lastIndexOf 获取某个元素在数组中出现的次数。如果出现一次就是结果
// 404 ms, 在所有 javascript 提交中击败了14.02%
// 说明 indexOf lastIndexOf 严重耗时
// 这个办法消耗内存最少
function singleNumber2(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (nums.indexOf(item) === nums.lastIndexOf(item)) {
      return item;
    }
  }
}


// 方案三：改进版：借用对象，节省时间。可以把已经出现的次数放在一个数组中，这样可以较少indexOf执行
// 320 ms, 在所有 javascript 提交中击败了16.45%
function singleNumber3(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[i]) {
      continue;
    }
    const item = nums[i];
    const firstIndex = nums.indexOf(item);
    const lastIndex = nums.lastIndexOf(item);
    if (firstIndex === lastIndex) {
      return item;
    }

    obj[lastIndex] = lastIndex;
  }
}

// 方法四：不使用额外的空间，直接在数组上存储（因为数组就是一个对象）
// 104 ms, 在所有 javascript 提交中击败了 32.80%
function singleNumber4(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  for (let i = 0; i < len; i++) {
    const item = `key${String(nums[i])}`;
    if (nums[item] === 0 || nums[item]) {
      delete nums[item];
    } else {
      nums[item] = nums[i];
    }
  }
  for (const key in nums) {
    if (key.indexOf('key') > -1) {
      return nums[key];
    }
  }
}

export {
  singleNumber1, singleNumber2, singleNumber3, singleNumber4,
};
