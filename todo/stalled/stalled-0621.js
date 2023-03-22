/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * (n + 1) * (times - 1) + maxKeyLen——这样有问题
 */
var leastInterval = function(tasks, n) {
  if (n === 0) return tasks.length;
  let dict = {};
  tasks.forEach(task => {
    if (dict[task]) {
      dict[task] = dict[task] + 1;
    } else {
      dict[task] = 1;
    }
  });
  let max = Math.max(...Object.values(dict));
  let times = 0;
  for (let key in dict) {
    if (dict[key] === max) {
      times++;
    }
  }
  // 如果 times 大于 n，现在算法不正确
  // 尝试就是分治算法了，判断后再处理？
  // 应该使用贪心算法
  return (n + 1) * (max - 1) + times;
};

// console.log(leastInterval(["A","A","A","B","B","B"], 2)) // 8
// console.log(leastInterval(["A","A","A","B","B","B"], 0)) // 6
// console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)) // 16
console.log(leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], 2)) // 12
