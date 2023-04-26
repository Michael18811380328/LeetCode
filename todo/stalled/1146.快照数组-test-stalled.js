/*
 * @lc app=leetcode.cn id=1146 lang=javascript
 *
 * [1146] 快照数组
 */

// 基本逻辑是数组的存取
// 关键是性能问题：拍摄快照时，是将数组全部拷贝一份，还是把数组中变化的元素记录一份，这个是关键（如果初始化数组很长，快照会消耗大量内存）
// 还是快照的时候，记录一下当前的实际情况，和默认状态做一个DIFF，这样快照的性能会好一点（记录时消耗，但是数据占用内存较少）

// https://leetcode-cn.com/problems/snapshot-array/solution/zi-jie-leetcode1146kuai-zhao-shu-zu-by-user7746o/
// 瓶子君这个说的还可以
// 暴力法不适合大量的数据
// 解法二：优化，字典数组+二分查找

// @lc code=start
/**
 * @param {number} length
 */
var SnapshotArray = function(length) {

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {

};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {

};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {

};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end

