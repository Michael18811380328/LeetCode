var MyCalendar = function() {
    this.arr = [];
};
/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
// 228 ms
// , 在所有 JavaScript 提交中击败了
// 62.96%
// 的用户
MyCalendar.prototype.book = function(start, end) {
    // 如果直接把每一个 true-false 存储，那么就是线性的设置
    // 能够设置一个二维数组，然后子数组是一个区间（闭区间）
    // 这样就避免性能问题；
    const endIndex = end - 1;
    let newInterval = [start, endIndex];
    console.log(newInterval);
    // 处理三个特殊情况
    if (this.arr.length === 0) {
        this.arr.push(newInterval);
        return true;
    }
    if (this.arr[0][0] > endIndex) {
        this.arr.unshift(newInterval);
        return true;
    }
    if (this.arr[this.arr.length - 1][1] < start) {
        this.arr.push(newInterval);
        return true;
    }
    
    // 循环遍历当前区间数组是否有满足条件的
    for (let i = 0; i < this.arr.length - 1; i++) {
        if (this.arr[i] && this.arr[i + 1] && this.arr[i][1] < start && this.arr[i + 1][0] > endIndex) {
            this.arr.splice(i + 1, 0, newInterval);
            console.log(this.arr)
            return true;
        }
    }
    // console.log('37',newInterval, this.arr, start, endIndex);
    return false;
};

var myCalendar = new MyCalendar();

let test = [[],[20,29],[13,22],[44,50],[1,7],[2,10],[14,20],[19,25],[36,42],[45,50],[47,50],[39,45],[44,50],[16,25],[45,50],[45,50],[12,20],[21,29],[11,20],[12,17],[34,40],[10,18],[38,44],[23,32],[38,44],[15,20],[27,33],[34,42],[44,50],[35,40],[24,31]];

for (let i = 0; i < test.length; i++) {
    let testarr = test[i];
    let result = myCalendar.book(testarr[0], testarr[1]);
    console.log(result);
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */


// ["MyCalendar","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book"]
// [[],[20,29],[13,22],[44,50],[1,7],[2,10],[14,20],[19,25],[36,42],[45,50],[47,50],[39,45],[44,50],[16,25],[45,50],[45,50],[12,20],[21,29],[11,20],[12,17],[34,40],[10,18],[38,44],[23,32],[38,44],[15,20],[27,33],[34,42],[44,50],[35,40],[24,31]]