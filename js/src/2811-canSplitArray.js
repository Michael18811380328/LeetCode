const canSplitArray = function(nums, m) {
  const len = nums.length;
  if (len < 3) {
    return true;
  }
  if (len === 3) {
    return (nums[0] + nums[1]) >= m || (nums[1] + nums[2]) >= m;
  }
  // 先计算每个三元数对的值
  const dict = {};
  for (let i = 0; i < len - 2; i++) {
    const result = (nums[i] + nums[i + 1]) >= m || (nums[i + 1] + nums[i + 2]) >= m;
    dict[`${i}-${i + 2}`] = result;
  }
  // 然后循环长度，计算最终的结果
  for (let length = 3; length < len; length++) {
    for (let start = 0; start < len - length; start++) {
      const result = dict[`${start + 1}-${start + length}`] || dict[`${start}-${start + length - 1}`];
      dict[`${start}-${start + length}`] = result;
    }
  }
  return dict[`${0}-${len - 1}`];
};

export { canSplitArray };
