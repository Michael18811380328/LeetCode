/*
 * @lc app=leetcode.cn id=722 lang=javascript
 *
 * [722] 删除注释
 */

// @lc code=start
// 现在还有不少问题
// var removeComments = function(source) {
//   // 关键问题：第一个有效注释优先于其他注释：如果字符串//出现在块注释中会被忽略。 同样，如果字符串/*出现在行或块注释中也会被忽略。
//   // 遍历每一行时，先看一下 两个 index 哪个比较小，然后优先选择这个设置
//   let isBlock = false;
//   let resultArr = [];
//   while (source.length > 0) {
//     let current = source.shift();
//     // 如果已经是块级代码，那么全局变量改一下，然后就遍历 
//     if (isBlock) {
//       const index = current.indexOf('*/');
//       if (index > -1) {
//         isBlock = false;
//         console.log(source)
//         let before = source.shift();
//         source.push(before + current.slice(index + 2));
//       }
//       // 注意，是否存在 /*   */ 
//       // 或者 */ /* 这样的情况
//       // 需要测试
//       // 最好转换成 while 循环，如果遇到这种情况，那么直接增加到数组中
//     }
//     // 如果不是块级代码，那么就遍历开始的注释部分
//     else {
//       const index1 = current.indexOf('//');
//       const index2 = current.indexOf('/*');
//       const index3 = current.indexOf('*/');
//       // 分治
//       // 如果没有注释，那么直接返回
//       console.log(index1, index2, index3);
//       if (index1 === -1 && index2 === -1) {
//         resultArr.push(current);
//       }
//       // 如果同时有index2 和 index3 那么直接去掉这部分，然后push到原来的数组中
//       else if (index1 === -1 && index2 !== -1 && index3 !== -1) {
//         let newLine = current.slice(0, index2) + current.slice(index3 + 2)
//         console.log(newLine);
//         if (newLine.length > 0) {
//           source.push(newLine);
//         }
//       }
//       // 行内注释
//       else if ((index2 === -1 && index1 > -1)) {
//         resultArr.push(current.slice(0, index1));
//       }
//       // 块级注释
//       else if ((index1 === -1 && index2 > -1) || index2 < index1) {
//         resultArr.push(current.slice(0, index2));
//         isBlock = true;
//       }
//       // 行内注释和块级注释都有，那么比较大小
//       else {
//         if (index1 < index2) {
//           resultArr.push(current.slice(0, index1));
//         } else {
//           resultArr.push(current.slice(0, index2));
//           isBlock = true;
//         }
//       }
//     }
//     // console.log(resultArr);
//   }
//   console.log(resultArr)
//   return resultArr;
// };

// 思路二
// 或者换一个思路思考问题，把这个问题变得简单一点
// 这样两次循环，但是比上面的清除，避免互相干扰
var removeComments = function(source) {
  // 先统一处理 // 行内注释，这样遍历一次（不管什么情况）
  let result1 = [];
  for (let i = 0; i < source.length; i++) {
    let cur = source[i];
    let index = cur.indexOf('//');
    // 没有行内注释
    if (index === -1) {
      result1.push(cur);
    }
    // 有行内注释，在第一位，全部删除
    else if (index === 0) {
      continue;
    }
    else {
      result1.push(cur.slice(0, index));
    }
  }
  // console.log(result1);
  // 然后统一处理一行内的块级注释
  let result2 = [];
  for (let i = 0; i < result1.length; i++) {
    let cur = result1[i];
    let index1 = cur.indexOf('/*');
    let index2 = cur.lastIndexOf('*/');
    if (index1 > -1 && index2 > -1) {
      let start = cur.slice(0, index1);
      let end = cur.slice(index2 + 2);
      let newCur = start + end;
      if (newCur.length > 0) {
        result2.push(newCur);
      }
    }
    else {
      result2.push(cur);
    }
  }
  // 然后处理跨行的块级注释
  // console.log(result2);
  // 注意：块级是否换行等等
  let result3 = [];
  let isBlock = false;
  let tmpStr = '';
  for (let i = 0; i < result2.length; i++) {
    let cur = result2[i];
    if (isBlock) {
      let index = cur.indexOf('*/');
      if (index === -1) {
        continue;
      }
      let end = cur.slice(index + 2);
      if ((tmpStr + end).length > 0) {
        result3.push(tmpStr + end);
      }
      tmpStr = '';
      isBlock = false;
    }
    else {
      let index = cur.indexOf('/*');
      if (index === -1) {
        result3.push(cur);
      }
      else {
        tmpStr = cur.slice(0, index);
        isBlock = true;
      }
    }
  }
  console.log(result3);
  return result3;
};

// 现在两个基本的例子正确
// 再分析一下，可以上线测试
// removeComments(["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]);
// ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]

// removeComments(["a/*comment", "line", "more_comment*/b"])
// ["ab"]

// removeComments(["struct Node{", "    /*/ declare members;/**/", "    int size;", "    /**/int val;", "};"])
// ["struct Node{","    ","    int size;","    int val;","};"]

// 现在这个测试不通过，就是块级注释中，插入了行内注释
// 这个和字符串匹配相关，能否使用栈操作？
removeComments(["main() {", "/* here is commments", "  // still comments */", "   double s = 33;", "   cout << s;", "}"])
// ["main() {","   double s = 33;","   cout << s;","}"]
// @lc code=end
