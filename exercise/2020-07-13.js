// 原地算法
// 不借助其他存储空间(或者使用临时变量)
// 应用：数组倒转；判断回文；排序数组去重

// 数组倒转
function reverseArray(arr) {
  const len = array.length;
  var middle = Math.floor(len / 2);
  for (let i = 1; i < middle; i += 1) {
    var temp = array[i];
    array[i] = array[n - 1 - i];
    array[n - 1- i] = temp;
  }
}

// 判断回文数
function isPalindromeStr(str) {
  var middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// 二分法查找数组
function binarySearch(oldArr, data) {
  // 如果是无序数组，首先排序
  let arr = qSort(oldArr);
  let upper = arr.length - 1;
  let lower = 0;
  while (lower <= upper) {
    let mid = Math.floor((upper + lower) / 2);
    if (arr[mid] < data) {
      lower = mid + 1;
    } else if (arr[mid] > data) {
      upper = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// 二分法实现快速排序
function qSort(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < povot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot).concat(qSort(right));
}
