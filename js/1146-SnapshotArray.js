/*
 * @lc app=leetcode.cn id=1146 lang=javascript
 * [1146] 快照数组
 * 需要考虑时间复杂度和空间复杂度，自己没有想出来算法
 */

/**
* Your SnapshotArray object will be instantiated and called as such:
* var obj = new SnapshotArray(length)
* obj.set(index,val)
* var param_2 = obj.snap()
* var param_3 = obj.get(index,snap_id)
*/

// 思路一：基本逻辑是数组的存取（内存溢出）（关键是性能问题：拍摄快照时，50000次数组全部深拷贝一份，内存爆了）
var SnapshotArray = function(length) {
  this.arr = new Array(length).fill(0);
  this.snapshot = {};
};

SnapshotArray.prototype.set = function(index, val) {
  this.arr[index] = val;
};

SnapshotArray.prototype.snap = function() {
  let key = Object.keys(this.snapshot).length;
  this.snapshot[key] = [...this.arr];
  return key;
};

SnapshotArray.prototype.get = function(index, snap_id) {
  return this.snapshot[snap_id][index];
};


// 思路二：把数组操作，改成完全 MAP 操作，避免大量深拷贝数组，这样可以解决大部分案例（73/75）
var SnapshotArray = function(length) {
  this.shot = 0;
  this.map = new Map();
};

SnapshotArray.prototype.set = function(index, val) {
  this.map.set(`${this.shot}-${index}`, val);
};

SnapshotArray.prototype.snap = function() {
  return this.shot++;
};

// 少数案例还是通不过-超出时间限制（不是内存爆了）这里循环性能不好
SnapshotArray.prototype.get = function(index, snap_id) {
  // 现在从后向前依次找快照，看那个快照有值就返回
  for (let i = snap_id; i >= 0; i--) {
    const val = this.map.get(`${i}-${index}`);
    if (val !== undefined) {
      return val;
    }
  }
  return 0;
};

// 解法三：优化，字典数组+二分查找（时间复杂度和空间复杂度都可以满足）
// https://leetcode-cn.com/problems/snapshot-array/solution/zi-jie-leetcode1146kuai-zhao-shu-zu-by-user7746o/

let SnapshotArray = function(length) {
  // 这里必须 fill 否则 map 会跳过
  this.arr = new Array(length).fill(0).map(() => new Map());
  this.snapId = 0;
};

SnapshotArray.prototype.set = function(index, val) {
  this.arr[index].set(this.snapId, val);
};

SnapshotArray.prototype.snap = function() {
  this.snapId++;
  return this.snapId - 1;
};

SnapshotArray.prototype.get = function(index, snap_id) {
  // 找到这个数的所有记录
  let snapIds = [...this.arr[index].keys()]
  // 二分查找，找到 <= snap_id 的值
  let start = 0;
  let end = snapIds.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (snapIds[mid] < snap_id) {
      start = mid + 1;
    } else if (snapIds[mid] > snap_id) {
      end = mid - 1;
    } else if (snapIds[mid] === snap_id) {
      return this.arr[index].get(snap_id);
    }
  }
  return this.arr[index].get(snapIds[start - 1]) || null;
};
