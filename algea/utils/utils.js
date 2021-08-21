// 常见工具函数

// 数组去重 (es5 使用哈希表去重)
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

// 找到数组最大值(es5)
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

// 找到数组最大值（es6）
function findMax2(arr) {
  return Math.max(...arr);
}

// query class name
function queryClassName(node, name) {
  let starts = '(^|[ \n\r\t\f])', ends = '([ \n\r\t\f]|$)';
  let regex = new RegExp(starts + name + ends), results = [];

  let walkTheDOM = function(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
    }
  }
  walkTheDOM(node, function (currentNode) {
    if (regex.test(currentNode.className)) {
      results.push(currentNode);
    }
  });
  return results;
}

// 不使用临时变量交换两个数字
function swap(a , b) {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a, b];
}

// Get random string
function randomString(n) {
  let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
  let tmp = '', i = 0, l = str.length;     
  for (i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}

// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
// 注意：filter() 不会对空数组进行检测。注意： filter() 不会改变原始数组。
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

// 删除字符串数组中重复值（es5）
// delete repeat item 
// arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
function deleteRepeat (arr) {
  return arr.filter(function(element, index) {
    return arr.indexOf(element) === index;
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
  if (str.length == 1) {
    return str;
  }
  let charObj = {};
  for (let i=0;i<str.length;i++) {
    if(!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = 1;
    } else {
      charObj[str.charAt(i)] += 1;
    }
  }
  let maxChar = '', maxValue = 1;
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


// 防抖
export const debounce = (fn, wait = 100) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};

// 节流
export const throttle = (func, delay) => {
  let timer = null;
  let startTime = Date.now();
  return function() {
    let curTime = Date.now();
    let remaining = delay - (curTime - startTime);
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
};


export const isValidEmail = (email) => {
  const reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,6}$/;
  return reg.test(email);
};

export const checkDesktop = () => {
  return window.innerWidth >= 768;
};

export const getErrorMessage = (err) => {
  if (err.response) {
    const { status } = err.response;
    if (status === 500) {
      return intl.get('Internal_server_error');
    }
  }
  return intl.get('Network_error');
};

export const getErrorMsg = (error) => {
  let errorMsg = '';
  if (error.response) {
    if (error.response.status === 403) {
      // toaster.danger();
      errorMsg = intl.get('Permission_denied');
    }
    else if (error.response.data && error.response.data['error_msg']) {
      errorMsg = error.response.data['error_msg'];
    }
    else {
      errorMsg = intl.get('Error');
    }
  } else {
    errorMsg = intl.get('Please_check_the_network');
  }
  return errorMsg;
};

