// 需求：网页中 HTML 标签缺少 aria-label 属性（盲人阅读器），需要获取这部分节点，同理适应于某些节点缺少某些属性的情况
// 环境：浏览器环境

let runNode = (node, path) => {
  // 如果是 script 标签，直接跳过
  if (node.tagName.toLowerCase() === 'script') {
    return;  
  }
  // 如果一个节点有 title 但是没有 ariaLabel 那么打印这个节点
  if (node.title && !node.ariaLabel) {
    console.log(node);
  }
  // 如果有子节点，递归子节点
  if (node.children) {
    // 使用扩展运算符把伪数组转换成数组
    [...node.children].forEach(child => {
      runNode(child, path + node.tagName.toLowerCase() + '/');
    });
  }
}

let root = document.getElementsByTagName('body')[0];
let path = '/';

// 设置定时器的目的：界面打印不符合的节点，本地会更改代码后，项目热更新，可以持续监测哪些代码缺少属性
setInterval(() => {
  console.log('开始测试');
  runNode(root, path);
}, 3000);
