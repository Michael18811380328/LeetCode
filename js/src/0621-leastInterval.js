// 0621 任务调度器
// https://leetcode.cn/problems/task-scheduler/
// 考点：贪心算法 + 桶
// 这个算法比较偏，看过官方答案后还有点想不通，理解困难，后续再思考
// 官方解答比较抽象，可以参考这个 /https://leetcode.cn/problems/task-scheduler/solution/tong-zi-by-popopop/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  // 1、遍历全部的数组，找到每一个字母出现的次数
  const map = {};
  for (let i = 0; i < tasks.length; i++) {
    if (map[tasks[i]]) {
      map[tasks[i]] = map[tasks[i]] + 1;
    }
    else {
      map[tasks[i]] = 1;
    }
  }
  // 2、然后对次数进行，排序 arr
  const arr = Object.values(map).sort((a, b) => a < b ? 1 : -1);
  // 3、找到出现最多的元素次数 arr[0]，假设我们其他的次数都小于 arr[0], 那么此时的次数应该是 (n + 1) * (arr[0] - 1) + 1 最后一个表示多出来的最多的元素
  // 这里先考虑，字母去重后的个数，小于等于 N + 1（在第五步中处理）
  let minLen = (arr[0] - 1) * (n + 1) + 1;
  // 4、遍历其他元素，如果其他元素个数等于最大元素个数，那么这个数字加1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      minLen++;
    }
  }
  // 5、最后比较玄：插入26个元素时，分成两种情况：
  // 5.1 当 X 预占位置能插满时，这种情况下其实每个任务之间都不存在空余时间，冷却时间已经被完全填满了。也就是说，我们执行任务所需的时间，就是任务的数量。
  // 5.2 不能插满，则取最少预占序列长度（即3算出来的结果）
  return Math.max(minLen, tasks.length);
};

// console.log(leastInterval(["A","A","A","B","B","B"], 2)) // 8
// console.log(leastInterval(["A","A","A","B","B","B"], 0)) // 6
// console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)) // 16
// console.log(leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], 2)) // 12

export { leastInterval };
