// 常见工具函数

// unique an array (use hash table es5)
let unique = function(arr) {
  let hashTable = {};
  let data = [];
  for(let i=0,l=arr.length;i<l;i++) {
    if(!hashTable[arr[i]]) {
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data;
}

function findMax(arr) {
  if(arr.length==1) {
      return arr[0];
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if(max < arr[i]) {
          max = arr[i];
      }
  }
  return max;
}

//  query class name
function queryClassName(node, name) {
  let walkTheDOM = function(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
    }
  }
  let starts = '(^|[ \n\r\t\f])',
    ends = '([ \n\r\t\f]|$)';
  let regex = new RegExp(starts + name + ends),
    results = [];

  walkTheDOM(node, function (currentNode) {
    if (regex.test(currentNode.className)) {
      results.push(currentNode);
    }
  });

  return results;
}

// swap number withour temp variable
function swap(a , b) {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a,b];
}

// Get random string
function randomString(n) {
  let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
  let tmp = '', 
      i = 0,
      l = str.length;     
  for (i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}

// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
// 注意： filter() 不会对空数组进行检测。注意： filter() 不会改变原始数组。
function deleteOddNumber(source) {
  return source.filter((x) => {
    return x % 2 !== 0;
  });
}

// delete space or undefined in an array
// arr = ['A', '', 'B', null, undefined, 'C', ' '];
function deleteSpace(array) {
  return array.filter((x) => {
    return x && x.trim();
  })
}

// delete repeat item 
// arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
function deleteRepeat (array) {
  return array.filter(function(element, index, arr) {
    return self.indexOf(element) === index;
  });
}

function setTreeData (source) {
  let cloneData = JSON.parse(JSON.stringify(source));// 对源数据深度克隆
  return cloneData.filter((father) => {// 循环所有项，并添加children属性
    let branchArr = cloneData.filter((child) => {
      father.id == child.parentId
    });   // 返回每一项的子级数组
    branchArr.length > 0 ? father.children = branchArr : '';
    //给父级添加一个children属性，并赋值
    return father.parentId == 0;
    //返回第一层
  });
}

// 调用时，字段名以字符串的形式传参，如treeData(source, 'id', 'parentId', 'children')
function treeData (source, id, parentId, children) {
  let cloneData = JSON.parse(JSON.stringify(source))
  return cloneData.filter(father=>{
    let branchArr = cloneData.filter(child => father[id] == child[parentId]);
    branchArr.length > 0 ? father[children] = branchArr : ''
    return father[parentId] == 0;
    // 如果第一层不是parentId=0，请自行修改
  });
}

// find the maximum duplicate char in an string
function findMaxDuplicateChar(str) {
  if(str.length == 1) {
    return str;
  }
  let charObj = {};
  for(let i=0;i<str.length;i++) {
    if(!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = 1;
    }else{
      charObj[str.charAt(i)] += 1;
    }
  }
  let maxChar = '',
      maxValue = 1;
  for(var k in charObj) {
    if(charObj[k] >= maxValue) {
      maxChar = k;
      maxValue = charObj[k];
    }
  }
  
  return maxChar;
  
}

/** find the max value in an consistant element in an array
* input: [1,1,2,4,-5,12,-3,1]
* output: 15
**/

function findMaxConsitantElement(a) {
  let max = 0;
  let t = [];
  for(var i = 0;i<a.length;i++) {
    t[i] = [];
    t[i][0] = a[i];
    if(t[i][0]>max) {
      max = t[i][0];
    }
    for(var j = i+1;j<a.length;j++) {
      t[i][j] = t[i][j-1] + a[j];
      if(t[i][j]>max) {
        max = t[i][j];
      }
    }
  }

  return max;
  
}
