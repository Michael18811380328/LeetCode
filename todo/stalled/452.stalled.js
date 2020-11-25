/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// 
/**
 * @param {number[][]} points
 * @return {number}
 */
// 算法：贪心算法
// 然后减去这部分子数组，然后递归计算剩余的情况
var findMinArrowShots = function(points) {
  // 首先把数组去重一下，避免后面的问题(一对多)
  let matrix = [];
  let dict = {};
  for (let i = 0; i < points.length; i++) {
    let key = `${points[i][0]}-${points[i][1]}`;
    if (!dict[key]) {
      matrix.push(points[i]);
      dict[key] = true;
    }
  }
  // console.log(matrix);
  return subFn(matrix);
};

// 辅助函数，获取数量
var subFn = function (matrix) {
  // 如果传入非法或者空数组，直接返回
  if (!matrix || (matrix && matrix.length === 0)) {
    return 0;
  }
  // 如果矩阵只有一个子数组，那么返回加1
  if (matrix.length === 1) {
    return 1;
  }
  // 如果矩阵有多个子数组，那么需要计算当前最大值，然后减去最大值对应的位置，然后递归计算
  const points = getMaxPoint(matrix);
  let res = [];
  // 如果有多个点，这里也需要处理。。。
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    const newMatrix = matrix.filter((arr) => {
      return arr[0] > point || arr[1] < point;
    });
    let item = 1 + subFn(newMatrix);
    res.push(item);
  }
  return res.length === 1 ? res[0] : Math.min(...res);
};

// 也就是求，多个节点中，哪个节点获取的值最大，这个可以使用哈希表实现（需要循环一次，能否有更好的思路）
var getMaxPoint = function(matrix) {
  let dict = {};
  let max = 0;
  let currentKeys = [];
  for (let i = 0; i < matrix.length; i++) {
    let item = matrix[i];
    let start = item[0];
    let end = item[1];
    // 这个有很大的性能问题
    for (let j = start; j <= end; j++) {
      if (dict[j]) {
        dict[j]++;
      } else {
        dict[j] = 1;
      }
      if (dict[j] > max) {
        max = dict[j];
        currentKeys = [j];
      }
      else if (dict[j] === max) {
        currentKeys.push(j);
      }
    }
  }
  // console.log(max, currentKey);
  return currentKeys; // 这是当前最大值的数组，然后需要删除对应的数组
}



// [[9,17],[4,12],[4,8],[4,8],[7,13],[3,4],[7,12],[9,15]]
// 这是现在出错的数组
// 按照贪心算法的出来的是3，实际上结果是2（因为最大值的问题）
// 如果有多个最小值，那么需要计算哪个最小
// 这个可能有性能问题，不过需要计算


// [[2,3],[7,15],[5,12],[4,5],[8,13],[9,16],[5,8],[8,16],[3,4],[8,17]]
// 看来还需要考虑出现的次数


// [[4289383,51220269],[81692777,96329692],[57747793,81986128],[19885386,69645878],[96516649,186158070],[25202362,75692389],[83368690,85888749],[44897763,112411689],[65180540,105563966],[4089172,7544908]]
// 如何求长度很长的数组的公共区间？不能使用离散的对象表示，最好使用区间表示
// 现在这样性能不好，会内存溢出。。。
// 需要减少不必要的循环
// <--- Last few GCs --->
// [41:0x5674750]      886 ms: Mark-sweep (reduce) 117.7 (126.7) -> 106.3 (115.3) MB, 35.5 / 0.0 ms  (+ 5.5 ms in 2 steps since start of marking, biggest step 4.1 ms, walltime since start of marking 118 ms) (average mu = 0.733, current mu = 0.736) last resor[41:0x5674750]      914 ms: Mark-sweep (reduce) 106.3 (111.3) -> 80.5 (85.6) MB, 28.3 / 0.0 ms  (average mu = 0.617, current mu = 0.001) last resort GC in old space requested
// <--- JS stacktrace --->
// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
//  1: 0x9feb00 node::Abort() [nodejs run]
//  2: 0x94a471 node::FatalError(char const*, char const*) [nodejs run]
//  3: 0xb720fe v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  4: 0xb72477 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  5: 0xd1c065  [nodejs run]
//  6: 0xd2e8b1 v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [nodejs run]
//  7: 0xcf4142 v8::internal::Factory::AllocateRaw(int, v8::internal::AllocationType, v8::internal::AllocationAlignment) [nodejs run]
//  8: 0xcf0392 v8::internal::FactoryBase<v8::internal::Factory>::AllocateRawArray(int, v8::internal::AllocationType) [nodejs run]
//  9: 0xcf0444 v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArrayWithFiller(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Handle<v8::internal::Oddball>, v8::internal::AllocationType) [nodejs run]
// 10: 0xe7dcee  [nodejs run]
// 11: 0xe83434  [nodejs run]
// 12: 0xe836f8  [nodejs run]
// 13: 0xed6d3b v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyAttributes) [nodejs run]
// 14: 0xf2af22 v8::internal::Object::AddDataProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyAttributes, v8::Maybe<v8::internal::ShouldThrow>, v8::internal::StoreOrigin) [nodejs run]
// 15: 0xf2e21f v8::internal::Object::SetProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::StoreOrigin, v8::Maybe<v8::internal::ShouldThrow>) [nodejs run]
// 16: 0x1057b55 v8::internal::Runtime::SetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::StoreOrigin, v8::Maybe<v8::internal::ShouldThrow>) [nodejs run]
// 17: 0x1058bf7 v8::internal::Runtime_SetKeyedProperty(int, unsigned long*, v8::internal::Isolate*) [nodejs run]
// 18: 0x13ce059  [nodejs run]

