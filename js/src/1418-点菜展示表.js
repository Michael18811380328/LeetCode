/*
 * @lc app=leetcode.cn id=1418 lang=javascript
 * [1418] 点菜展示表
 */
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
// Your runtime beats 42.31 % of javascript submissions
var displayTable = function(orders) {
  // 设置一个对象记录菜品的名称
  let menu = {};
  // 设置一个对象（数组）记录桌号点的东西（对象）
  let tables = [];
  // 循环数组
  orders.forEach(order => {
    let tableID = order[1];
    let food = order[2];
    if (!menu[food]) {
      menu[food] = true;
    }
    if (!tables[tableID]) {
      tables[tableID] = {};
    }
    let table = tables[tableID];
    if (table[food]) {
      table[food]++
    } else {
      table[food] = 1
    }
  });
  // 遍历菜品名称对象，并放到结果数组中第一行
  let menuArr = [];
  for (let key in menu) {
    menuArr.push(key);
  }
  menuArr.sort((a, b) => a > b ? 1 : -1);
  // 然后排序遍历桌号点的东西
  // tables.sort((a, b) => a.tableID < b.tableID ? 1 : -1);
  let resultArr = [];
  tables.forEach((table, index) => {
    let tmp = [];
    tmp.push(String(index));
    menuArr.forEach(key => {
      let times = table[key] ? table[key] : 0;
      tmp.push(String(times));
    });
    resultArr.push(tmp);
  });
  menuArr.unshift('Table');
  resultArr.unshift(menuArr);
  return resultArr;
};
