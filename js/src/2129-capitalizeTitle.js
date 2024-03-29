/**
 * [2129] 将标题首字母大写
 * Your runtime beats 55.68 % of javascript submissions
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function(title) {
  // 辅助函数：转换字符串大小写
  const toSmall = (str) => {
    return str.toLowerCase();
  };
  const toLarge = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  // 1 把字符串转换成数组
  const arr = title.split(' ');
  // 2 遍历数组
  for (let i = 0; i < arr.length; i++) {
    const len = arr[i].length;
    if (len < 3) {
      // 2.1 如果是1-2全部变成小写
      arr[i] = toSmall(arr[i]);
    } else {
      // 2.2 如果是大于2，首字母大写
      arr[i] = toLarge(arr[i]);
    }
  }
  // 3 把处理后的数组转换成字符串输出
  return arr.join(' ');
};

export default capitalizeTitle;
