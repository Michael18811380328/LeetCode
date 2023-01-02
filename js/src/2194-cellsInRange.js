/**
 * [2194] Excel 表中某个范围 "A1:F1" 内的单元格数组
 * Your runtime beats 86.88 % of javascript submissions
 * @param {string} s "A1:F1"
 * @return {string[]}
 */
const cellsInRange = function(s) {
  // 双层循环即可
  const a = s.charCodeAt(0);
  const b = s.charCodeAt(3);
  // a b 是外循环，然后获取对应的 ASCII 码

  const c = Number(s[1]);
  const d = Number(s[4]);
  // cd 是内循环，直接使用数字即可

  const res = [];
  for (let i = a; i <= b; i++) {
    const tmp = String.fromCharCode(i);
    for (let j = c; j <= d; j++) {
      res.push(tmp + j);
    }
  }
  return res;
};

export { cellsInRange };
