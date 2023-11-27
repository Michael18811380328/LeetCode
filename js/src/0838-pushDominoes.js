// 838 多米诺
// 这个比较难

// /**
//  * @param {string} dominoes
//  * @return {string}
//  */

// 思路1：广度优先算法（短的没问题，长字符串会超时）应该避免大量数组转换
// 官方给出了 BFS 的其他语言解答
const pushDominoes = function(dominoes) {
  const len = dominoes.length;
  // 这个存放可能到的位置
  let queue = [];
  // 第一次遍历，先把可能倒下的牌的位置都放到队列中，开始广度优先遍历
  for (let i = 0; i < len; i++) {
    if (dominoes[i] !== '.') {
      queue.push(i);
    }
  }
  dominoes = dominoes.split('');
  // 判断每一个节点倒下后的情况
  while (queue.length > 0) {
    const queueTmp = [...queue];
    const dict = {};
    const tmp = [];
    while (queueTmp.length > 0) {
      // 取出第一个倒下的节点
      const i = queueTmp.shift();
      if (dominoes[i] === 'L') {
        // 如果左边是点，那么可以继续处理，继续判断左边两个位置的情况
        if (dominoes[i - 1] === '.') {
          // 左边第二位有四种情况，R L . 空
          if (dominoes[i - 2] === 'R') {
            // 不变
          }
          else if (dominoes[i - 2] === '.') {
            dict[i - 1] = 'L';
            tmp.push(i - 1);
          }
          // else if (!dominoes[i - 2] || dominoes[i - 2] === 'L') {
          //   dict[i - 1] = 'L'
          // }
          // 可以简化成下面的形式
          else {
            dict[i - 1] = 'L';
          }
        }
      }
      // else if (dominoes[i] === 'R') 省略
      else {
        if (dominoes[i + 1] === '.') {
          if (dominoes[i + 2] === 'L') {
            // 不变
          }
          else if (dominoes[i + 2] === '.') {
            dict[i + 1] = 'R';
            tmp.push(i + 1);
          }
          // else if (!dominoes[i + 2] || dominoes[i + 2] === 'R') {
          //   dict[i + 1] = 'R'
          // }
          else {
            dict[i + 1] = 'R';
          }
        }
      }
    }
    // 内部循环后 queueTmp 空了，然后把临时数组统一放到 queue，统一改变数组原始内容，然后第二轮开始
    queue = [...tmp];
    for (const key in dict) {
      dominoes[key] = dict[key];
    }
  }
  return dominoes.join('');
};

// console.log(pushDominoes(".L.R.") === "LL.RR");
// console.log(pushDominoes(".L.R....") === "LL.RRRRR")
// console.log(pushDominoes("RR.L") === "RR.L")
// console.log(pushDominoes("...L.R...") === "LLLL.RRRR")
// console.log(pushDominoes(".L.R...LR..L..") === "LL.RR.LLRRLL..")
// console.log(pushDominoes(".L.R...LR..L.L.R.......LR..L.L.R.......LR..L.L.R.......LR..L.L.R.......LR..L.L.R.......LR..L.L.R.......LR..L.L.R.......LR..L.L.R...................LR..L.") === "LL.RR.LLRRLLLL.RRRR.LLLLRRLLLL.RRRR.LLLLRRLLLL.RRRR.LLLLRRLLLL.RRRR.LLLLRRLLLL.RRRR.LLLLRRLLLL.RRRR.LLLLRRLLLL.RRRR.LLLLRRLLLL.RRRRRRRRRR.LLLLLLLLLLRRLL.");

// 思路2：官方思路：模拟
// 我们可以枚举所有连续的没有被推动的骨牌，根据这段骨牌的两边骨牌（如果有的话）的推倒方向决定这段骨牌的最终状态：
// 如果两边的骨牌同向，那么这段连续的竖立骨牌会倒向同一方向。
// 如果两边的骨牌相对，那么这段骨牌会向中间倒。
// 如果两边的骨牌相反，那么这段骨牌会保持竖立。
// 链接：https://leetcode.cn/problems/push-dominoes/solutions/1278202/tui-duo-mi-nuo-by-leetcode-solution-dwgm/
const pushDominoes2 = function(dominoes) {
  const s = [...dominoes];
  const len = s.length;
  let i = 0;
  let left = 'L';
  while (i < len) {
    let j = i;
    while (j < len && s[j] == '.') { // 找到一段连续的没有被推动的骨牌
      j++;
    }
    const right = j < len ? s[j] : 'R';
    if (left === right) { // 方向相同，那么这些竖立骨牌也会倒向同一方向
      while (i < j) {
        s[i++] = right;
      }
    } else if (left === 'R' && right === 'L') { // 方向相对，那么就从两侧向中间倒
      let k = j - 1;
      while (i < k) {
        s[i++] = 'R';
        s[k--] = 'L';
      }
    }
    left = right;
    i = j + 1;
  }
  return s.join('');
};

export { pushDominoes, pushDominoes2 };
