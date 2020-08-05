// 贪心算法
// 背包问题（背包中最多能放多少钱的东西）
// 贪心算法需要分析，是否是最佳的算法，通常内部使用while循环实现，不回溯
function greedy(values, weights, capacity) {
  // 数据预处理
  let returnValue = 0;
  let remainCapacity = capacity;

  let sortArray = [];
  values.map((current, index) => {
    let newValue = {
      'value': values[index],
      'weight': weights[index],
      'radio': values[index] / weight[index],
      sortArray.push(newValue);
    };
  });
  sortArray.sort((a, b) => b.radio > a.radio);
  // 贪心算法开始
  sortArray.map((current, index) => {
    let num = parseInt(remainCapacity / current.weight);
    remainCapacity -= num * current.weight;
    returnValue += num * cur.value;
  });
  return returnValue;
}
