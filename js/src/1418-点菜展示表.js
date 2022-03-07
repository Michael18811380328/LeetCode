/*
 * @lc app=leetcode.cn id=1418 lang=javascript
 * [1418] 点菜展示表
 */
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
// Your runtime beats 42.31 % of javascript submissions
const displayTable = function(orders) {
  // 设置一个对象记录菜品的名称
  const menu = {};
  // 设置一个对象（数组）记录桌号点的东西（对象）
  const tables = [];
  // 循环数组
  orders.forEach((order) => {
    const tableID = order[1];
    const food = order[2];
    if (!menu[food]) {
      menu[food] = true;
    }
    if (!tables[tableID]) {
      tables[tableID] = {};
    }
    const table = tables[tableID];
    if (table[food]) {
      table[food]++;
    } else {
      table[food] = 1;
    }
  });
  // 遍历菜品名称对象，并放到结果数组中第一行
  const menuArr = [];
  for (const key in menu) {
    menuArr.push(key);
  }
  menuArr.sort((a, b) => a > b ? 1 : -1);
  // 然后排序遍历桌号点的东西
  // tables.sort((a, b) => a.tableID < b.tableID ? 1 : -1);
  const resultArr = [];
  tables.forEach((table, index) => {
    const tmp = [];
    tmp.push(String(index));
    menuArr.forEach((key) => {
      const times = table[key] ? table[key] : 0;
      tmp.push(String(times));
    });
    resultArr.push(tmp);
  });
  menuArr.unshift('Table');
  resultArr.unshift(menuArr);
  return resultArr;
};
