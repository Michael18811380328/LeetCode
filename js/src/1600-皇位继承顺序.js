/*
 * @lc app=leetcode.cn id=1600 lang=javascript
 *
 * [1600] 皇位继承顺序
 */

// @lc code=start
/**
 * @param {string} kingName
 */
// Your runtime beats 73.91 % of javascript submissions
const ThroneInheritance = function(kingName) {
  this.init = kingName;
  this.obj = {};
  this.obj[kingName] = [];
  this.obj[kingName].live = true;
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
  // 建立链接关系
  this.obj[parentName].push(childName);
  this.obj[childName] = [];
  this.obj[childName].live = true;
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
  this.obj[name].live = false;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
  const king = this.init;
  const sons = this.obj[king];
  const result = [];
  // 如果根节点活着，那么放入继承序列
  if (this.obj[king].live) {
    result.push(king);
  }
  // 辅助函数（DFS遍历子节点）
  var runChild = function(name, result, obj) {
    if (obj[name].live) {
      result.push(name);
    }
    const sons = obj[name];
    for (let i = 0; i < sons.length; i++) {
      const item = sons[i];
      runChild(item, result, obj);
    }
  };
  // 遍历开始
  for (let i = 0; i < sons.length; i++) {
    const item = sons[i];
    runChild(item, result, this.obj);
  }
  return result;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
// @lc code=end
