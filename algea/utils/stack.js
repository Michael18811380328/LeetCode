/* stack LIFO */
// stack: LIFO: Last in, First out(后进先出)
// queue: FIFO: First in, First out(先进先出)
class Stack {
  constructor() {
    this.dataSource = [];
    this.top = 0;
  }
  
  push(el) {
    this.dataSource[this.top++] = el;
  }
  
  pop() {
    return this.dataSource[--this.top]
  }
  
  // 返回栈顶的值（不改变栈）
  peek() {
    return this.dataSource[this.top-1]
  }
  
  clear() {
    this.dataSource = [];
  }
}
