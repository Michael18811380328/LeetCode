/*
 * @lc app=leetcode.cn id=1603 lang=javascript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
// Your runtime beats 78.07 % of javascript submissions
const ParkingSystem = function(big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  switch (carType) {
    case 1:
      if (this.big > 0) {
        this.big--;
        return true;
      } else {
        return false;
      }
    case 2:
      if (this.medium > 0) {
        this.medium--;
        return true;
      } else {
        return false;
      }
    case 3:
      if (this.small > 0) {
        this.small--;
        return true;
      } else {
        return false;
      }
    default:
      break;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * let obj = new ParkingSystem(big, medium, small)
 * let param_1 = obj.addCar(carType)
 */
// @lc code=end
