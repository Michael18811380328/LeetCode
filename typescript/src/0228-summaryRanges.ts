function summaryRanges(nums: number[]): string[] {
  // 注意：处理负数
  const len: number = nums.length;
  const res: any[] = [];
  if (len === 0) return res;
  if (len === 1) {
    const item = String(nums[0]);
    res.push(item);
    return res;
  }
  // 无重复元素的有序整数数组
  // 数组中数值大于2，遍历一次
  let start: number = nums[0];
  let current: number = nums[0];
  for (let i = 1; i < len; i++) {
    if (nums[i] === current + 1) {
      current = nums[i];
    } else {
      if (start !== current) {
        // start current 放在数组中
        const item = `${start}->${current}`;
        res.push(item);
      } else {
        const item = String(start);
        res.push(item);
      }
      // 重置start
      start = nums[i];
      current = nums[i];
    }
  }
  // 最后处理剩余的
  if (start !== current) {
    const item = `${start}->${current}`;
    res.push(item);
  } else {
    const item = String(start);
    res.push(item);
  }
  return res;
}

export {summaryRanges};
