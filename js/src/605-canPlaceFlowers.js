/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  // 循环数组，如果当前的值和前面后面的都没有（或者前面后面不存在）那么就可以满足条件
  // 然后 N - 1
  // 如果N小于等于0，那么久可以实现（复杂情况：二维实现）
  if (n === 0) return true;
  const len = flowerbed.length;
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 0) {
      if ((flowerbed[i - 1 ] === 0 || !flowerbed[i - 1 ]) && (flowerbed[i + 1 ] === 0 || !flowerbed[i + 1 ])) {
        n--;
        flowerbed[i] = 1;
        if (n <= 0) return true;
      }
    }
  }
  return n <= 0;
};

// 有没有更好的办法：判断是否存在 [0,0,0] 这样的子数组，然后计算和？
// 把数组转换成字符串，然后 indexOf 000 这样的情况
// 可以试试第二种思路
// var canPlaceFlowers = function(flowerbed, n) {  
//   if (n === 0) return true;
//   let str = flowerbed.join('');
//   const len = flowerbed.length;

//   while (str.indexOf('000') > -1) {
//     let index = str.indexOf('000');
//     n--;
//     str = str.slice() + '010' + str.slice();
//     if (n <= 0) return true;
//   }
// };
