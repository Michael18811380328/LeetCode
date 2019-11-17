// 115 设计栈
// 需求：设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

// 方法一：正确
// 直接使用数组的原生方法。获取最小值时，使用Math.min获取。
// 消耗内存少，但是获取内存耗时
// 204 ms , 在所有 javascript 提交中击败了 34.80%
/**
 * initialize your data structure here.
 */
function MinStack() {
  this.value = [];
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.value.push(x);
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.value.pop();
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const len = this.value.length;
  return this.value[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...this.value);
};


// 方法二：有问题（后期优化）
// 在数组中设置最小值；当出栈入栈时更新最小值
// 获取最小值直接返回
// 现在方法二有问题，需要检查

function MinStack2() {
  this.value = [];
  this.min = null;
}

// 这里需要优化
MinStack2.prototype.push = function(x) {
  this.value.push(x);
  if (!this.min || x < this.min) {
    this.min = x;
  }
  return null;
};

// 这里需要优化
MinStack2.prototype.pop = function() {
  const item = this.value.pop();
  this.min = Math.min(...this.value);
  return null;
};

MinStack2.prototype.top = function() {
  const len = this.value.length;
  return this.value[len - 1];
};

MinStack2.prototype.getMin = function() {
  return this.min;
};

export { MinStack, MinStack2 };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
