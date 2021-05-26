// 838 多米诺

// 如果长度是10000，那么函数需要递归执行最多10000次，这个性能是否能满足要求，还是有更合适的办法

function run(s) {
  return _run(s);
  // 测试一下单个字符串的情况
}

// 辅助函数
function _run(oldStr) {
  let newStr = oldStr;
  // 处理字符串
  // 是否需要转换成数组，还是直接字符串处理？
  const len = newStr.length;
  // 循环每一个点，然后判断更改前后是否相同
  for (let i = 0; i < len; i++) {
    // 一个点，左右可能有三种情况，那么组合起来就是9个情况（自身有三个情况，其中 LR 已经到下，所以不考虑，只考虑自身是 . 的情况）
    if (newStr[i] !== '.') {
      continue;
    }
    // 边界两个点需要单独处理
    else if (i === 0 && (newStr[1] === 'L' || newStr[1] === 'R')) {
      // i 应该变成第2个的值
      newStr = newStr[1] + newStr.slice(1);
    }
    else if (i === len - 1 && (newStr[len - 2] === 'L' || newStr[len - 2] === 'R')) {
      // i 应该变成倒数第2的值
      newStr = newStr.slice(0, len - 1) + newStr[len - 2];
    }

    // 左右相同：
      // 左右都是点，继续
      // 左右都是相同的，那么倒向相同的方向
      // 正确的
    else if (newStr[i - 1] === newStr[i + 1] && newStr[i - 1] !== '.') {
      newStr = newStr.slice(0, i) + newStr[i + 1] + newStr.slice(i + 1);
    }

    // 左右不同：
      // 一个是点，一个是 L或者 R,那么这个点变成 L 或者 R
      // 如果左侧是 L 右侧 是 R ，或者 左侧是 R 右侧是 L，那么保持原来不变
      // 这里有问题
    else {
      if (newStr[i - 1] === '.') {
        console.log(newStr, 41, i , newStr[i]);
        newStr = newStr.slice(0, i) + newStr[i + 1] + newStr.slice(i + 1);
        console.log(newStr, 48);
      }
      else if (newStr[i + 1] === '.') {
        newStr = newStr.slice(0, i) + newStr[i - 1] + newStr.slice(i + 1);
      } 
    }
    // console.log(newStr);    
  }
  // 终止条件：推到函数执行前后，字符串没有变化，那么证明已经停止了
  if (newStr === oldStr) {
    return oldStr;
  } else {
    return _run(newStr);
  }
}

// test
// console.log(run(".L.R."), "LL.RR");
// console.log(run(".L.R...."), "LL.RRRRR")
// console.log(run("RR.L") === "RR.L")
console.log(run("...L.R..."), "")
// console.log(run(".L.R...LR..L.."), "LL.RR.LLRRLL..")
