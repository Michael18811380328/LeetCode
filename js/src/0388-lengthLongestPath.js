// https://leetcode-cn.com/problems/longest-absolute-file-path/
// 本体纯考细节，没有任何特别需要注意的知识点。

// 思路1：有缺陷
const lengthLongestPath = function(input) {
  // 辅助函数：返回一个路径中缩进 \t 的数量
  getIndent = (path) => {
    let times = 0;
    for (let i = 0; i < path.length; i++) {
      // 注意：\t 是一个字符
      if (path[i] == '\t') {
        times++;
      } else {
        return times;
      }
    }
    return times;
  };
  // 0：如果没有点，那么不存在任何文件
  if (!input.includes('.')) {
    return 0;
  }
  // 1、先把字符串路径，使用 \n 换行符，分割成一个数组 arr1
  const arr1 = input.split('\n');
  // 2、新建一个数组 arr2，然后把 arr1 中每一项的 \t 算出来，然后设置一个权重，同时判断
  const dict = {};
  let arr2 = arr1.map((item) => {
    const num = getIndent(item);
    // 使用一个字典，记录不同字符串中的缩进个数
    dict[item] = num;
    return { num, item };
  });
  // 3、arr2 按照 \t 的数量排序一下，找到最大的那个（或者在第二步中就算出来）
  arr2 = arr2.sort((a, b) => { return a.num > b.num ? -1 : 1; });
  // 4、找到 ARR1 中对应的 index，然后反向循环，找到最终的路径(如果有两个相同的，那么需要找到最大的)
  let res = '';
  for (let i = 0; i < arr2.length; i++) {
    const tmptargetIndex = arr1.indexOf(arr2[i].item);
    let tmpcurrentNumber = dict[arr2[i].item];
    let tmpres = arr2[i].item.replace(/\t/ig, '');
    for (let i = tmptargetIndex - 1; i >= 0; i--) {
      if (dict[arr1[i]] === tmpcurrentNumber - 1) {
        tmpcurrentNumber--;
        tmpres = `${arr1[i].replace(/\t/ig, '')}/${tmpres}`;
      }
    }
    if (tmpres.length > res.length) {
      res = tmpres;
    }
  }
  return res.length;
};

// 链接：https://leetcode.cn/problems/longest-absolute-file-path/solutions/1433141/wen-jian-de-zui-chang-jue-dui-lu-jing-by-fi0r/
const lengthLongestPath2 = function(input) {
  const n = input.length;
  let pos = 0;
  let ans = 0;
  const stack = [];

  while (pos < n) {
    /* 检测当前文件的深度 */
    let depth = 1;
    while (pos < n && input[pos] === '\t') {
      pos++;
      depth++;
    }
    /* 统计当前文件名的长度 */
    let isFile = false;
    let len = 0;
    while (pos < n && input[pos] !== '\n') {
      if (input[pos] === '.') {
        isFile = true;
      }
      len++;
      pos++;
    }
    /* 跳过当前的换行符 */
    pos++;

    while (stack.length >= depth) {
      stack.pop();
    }
    if (stack.length) {
      len += stack[stack.length - 1] + 1;
    }
    if (isFile) {
      ans = Math.max(ans, len);
    } else {
      stack.push(len);
    }
  }
  return ans;
};

export { lengthLongestPath, lengthLongestPath2 };
