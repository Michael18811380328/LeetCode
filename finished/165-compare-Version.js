// 165 比较版本号码
// 比较两个版本号 version1 和 version2。
// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。
// 注意：版本号中可能有前导0

// 输入: version1 = "1.0.1", version2 = "1"
// 输出: 1

// 思路1：把字符串处理成两个数组，字符传数组转换成数值，并删除前导0, 比较大小；
// 处理思路明确，但是循环较多，性能不好
// 68 ms , 在所有 javascript 提交中击败了 67.10%
function compareVersion(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  // 删除前导0， parseInt
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = parseInt(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = parseInt(arr2[i]);
  }
  // 并删除后面的几个空位0
  while (arr1[arr1.length - 1] === 0) {
    arr1.pop();
  }
  while (arr2[arr2.length - 1] === 0) {
    arr2.pop();
  }
  const len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    if (arr1[i] > arr2[i]) {
      return 1;
    }
    else if (arr1[i] < arr2[i]) {
      return -1;
    }
  }
  // 如果循环一次没有结果
  if (arr1.length === arr2.length) {
    return 0;
  }
  else if (arr1.length < arr2.length) {
    return -1;
  }
  else {
    return 1;
  }
}

function compareTwo(a, b) {
  if (a === b) return 0;
  return a > b ? 1 : -1;
}

// 思路2：在转化过程中，使用一次遍历就完成比较；使用一次循环比较更快；正则很耗时
// 92 ms, 在所有 javascript 提交中击败了 5.81%
function compareVersion2(version1, version2) {
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  // 删除前导0， parseInt
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  const minLen = arr1Len < arr2Len ? arr1Len : arr2Len;

  for (let i = 0; i < minLen; i++) {
    const item1 = parseInt(arr1[i]);
    const item2 = parseInt(arr2[i]);
    const res = compareTwo(item1, item2);
    if (res !== 0) {
      return res;
    }
  }
  // 这个判断一个剩余的，然后比较数值较简单，正则耗时，数组转换耗时
  arr1.splice(0, minLen);
  arr2.splice(0, minLen);
  const res1 = arr1.join('').replace(/0/g, '');
  const res2 = arr2.join('').replace(/0/g, '');
  if (res1 !== '') {
    return 1
  }
  else if (res2 !== '') {
    return -1
  }
  else {
    return 0
  }
}

// 思路3：思路二基础上，优化正则
// 64 ms , 在所有 javascript 提交中击败了 78.71%
function compareVersion3(version1, version2) {
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  const minLen = arr1Len < arr2Len ? arr1Len : arr2Len;
  for (let i = 0; i < minLen; i++) {
    const item1 = parseInt(arr1[i]);
    const item2 = parseInt(arr2[i]);
    const res = compareTwo(item1, item2);
    if (res !== 0) {
      return res;
    }
  }
  arr1.splice(0, minLen);
  arr2.splice(0, minLen);
  let arr;
  let isArr1 = null;
  if (arr1.length > 0) {
    isArr1 = true;
    arr = arr1;
  } else {
    isArr1 = false;
    arr = arr2;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = parseInt(arr[i]);
    if (item > 0) {
      return isArr1 ? 1 : -1;
    }
  }
  return 0;
}

export { compareVersion, compareVersion2, compareVersion3 };
