let runNode = (node, path) => {
  // 判断节点的属性，然后进行处理
  if (node.tagName.toLowerCase() === 'script') {
    return;  
  }
  if (node.title && !node.ariaLabel) {
    console.log(node);
  }  
  if (node.children) {
    [...node.children].forEach(child => {
      runNode(child, path + node.tagName.toLowerCase() + '/');
    })
  }
}

let root = document.getElementsByTagName('body')[0];
let path = '/'

setInterval(() => {
  console.log('开始测试');
  runNode(root, path);
}, 3000)

// 然后写一个定时器，每隔1秒执行一次，这样在界面上操作，就可以知道哪些节点有问题了