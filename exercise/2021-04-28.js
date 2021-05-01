// 背包问题
function knapsack(capacity, size, value, n) {
  let k = [];
  // 初始化一个矩阵
  for (let i = 0; i <= n; i++) {
    k[i] = [];
  }
  for (let j = 0; j <= n; j++) {
    for (let w = 0; w <= capacity; w++) {
      if (j === 0 || w === 0) {
        k[j][w] = 0;
      }
      else if (size[j - 1] <= w) {
        k[j][w] = Math.max(value[j - 1] + k[j - 1][w - size], k[j - 1][w]);
      }
      else {
        k[j][w] = k[j - 1][w];
      }
    }
  }
  return k[n][capacity];
}

// Queue FIFO
class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(el) {
    this.data.push(el);
  }
  dequeue(el) {
    this.data.shift(el);
  }
  front() {
    return this.data[0];
  }
  back() {
    return this.data[this.data.length - 1];
  }
  clear() {
    this.data = [];
  }
}

// Stack LIFO
class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(el) {
    this.data[this.top++] = el;
  }

  pop() {
    return this.data[--this.top];
  }

  peek() {
    return this.data[this.top - 1];
  }

  clear() {
    this.data = [];
  }
}
