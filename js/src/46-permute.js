// 46 获取数组的全排列：回溯算法
// 25/25 cases passed (100 ms)
// Your runtime beats 69.06 % of javascript submissions
// Your memory usage beats 28.58 % of javascript submissions (40.3 MB)

function backTrack(list, temp, nums, len) {
  if (temp.length === len) {
    list.push([...temp]);
    return;
  }
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (temp.includes(num)) {
      continue;
    }
    temp.push(num);
    backTrack(list, temp, nums, len);
    temp.pop();
  }
}

const permute = (nums) => {
  const list = [];
  const temp = [];
  const len = nums.length;
  backTrack(list, temp, nums, len);
  return list;
};

export { permute };
