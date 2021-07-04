/*
 * @lc app=leetcode.cn id=1476 lang=javascript
 *
 * [1476] 子矩形查询
 */

// @lc code=start
/**
 * @param {number[][]} rectangle
 */
// Your runtime beats 88.68 % of javascript submissions
var SubrectangleQueries = function(rectangle) {
  this.matrix = rectangle;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      this.matrix[i][j] = newValue;
    }
    // 如果矩阵很大，那么使用第二种；
    // 如果矩阵较小，就使用第一种for循环
    // const len = col2 - col1 + 1;
    // let subArr = new Array(len).fill(newValue);
    // this.matrix[i].splice(col1, len, ...subArr);
  }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
  return this.matrix[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
// @lc code=end

