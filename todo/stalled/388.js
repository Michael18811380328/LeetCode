// // 辅助函数1：监测文件必须有点，而且不能是第一个或者最后一个
// checkFile = (fileName) => {
//   const index = fileName.indexOf('.');
//   return index > 1 && index < fileName.length - 1;
// }

// 辅助函数：返回一个路径中缩进 \t 的数量
getIndent = (path) => {
  let times = 0;
  for (let i = 0; i < path.length; i++) {
    // 注意：\t 是一个字符
    if (path[i] == '\t') {
      times++;
    } else {
      return times;
    }
  }
  return times;
}

var lengthLongestPath = function(input) {
  // 0：如果没有点，那么不存在任何文件
  if (!input.includes('.')) {
    return 0;
  }

  // 1、先把字符串路径，使用 \n 换行符，分割成一个数组 arr1
  let arr1 = input.split('\n');

  // 2、新建一个数组 arr2，然后把 arr1 中每一项的 \t 算出来，然后设置一个权重，同时判断
  let dict = {};
  let arr2 = arr1.map(item => {
    let num = getIndent(item);
    // 使用一个字典，记录不同字符串中的缩进个数
    dict[item] = num;
    return { num, item };
  });

  // 3、arr2 按照 \t 的数量排序一下，找到最大的那个（或者在第二步中就算出来）
  arr2 = arr2.sort((a, b) => {return a.num > b.num ? -1 : 1});

  // 4、找到 ARR1 中对应的 index，然后反向循环，找到最终的路径(如果有两个相同的，那么需要找到最大的)
  // let targetIndex = arr1.indexOf(arr2[0].item);
  // let currentNumber = dict[arr2[0].item];
  // let res = arr2[0].item.replace(/\t/ig, '');
  // for (let i = targetIndex - 1; i >= 0; i--) {
  //   if (dict[arr1[i]] === currentNumber - 1) {
  //     currentNumber--;
  //     res = arr1[i].replace(/\t/ig, '') + '/' + res;
  //   }
  // }
  // console.log(arr2);
  let res = '';
  for (let i = 0; i < arr2.length; i++) {
    let tmptargetIndex = arr1.indexOf(arr2[i].item);
    let tmpcurrentNumber = dict[arr2[i].item];
    let tmpres = arr2[i].item.replace(/\t/ig, '');
    for (let i = tmptargetIndex - 1; i >= 0; i--) {
      if (dict[arr1[i]] === tmpcurrentNumber - 1) {
        tmpcurrentNumber--;
        tmpres = arr1[i].replace(/\t/ig, '') + '/' + tmpres;
      }
    }
    if (tmpres.length > res.length) {
      console.log(tmpres);
      res = tmpres;
    }
  }

  return res.length;
}
// https://leetcode-cn.com/problems/longest-absolute-file-path/
  
// 其他特殊情况处理
// console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext") === 20); // "dir/subdir2/file.ext"
// console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext") === 32); // "dir/subdir2/subsubdir2/file2.ext"
// console.log(lengthLongestPath("a") === 0); 
// console.log(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt") === 12); 
// console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfiledeuledeuledeuledeuledeuledeuledeuledeui.ext\n\t\tfile.ext") === 59; 

console.log(lengthLongestPath("sladjf\n\tlkjlkv\n\t\tlkjlakjlert\n\t\t\tlaskjglaksjf\n\t\t\t\tlakjgfljrtlj\n\t\t\t\t\tlskajflakjsvlj\n\t\t\t\t\t\tlskgjflkjrtlrjt\n\t\t\t\t\t\t\tlkjglkjlvkjdlvkj\n\t\t\t\t\t\t\t\tlfjkglkjfljdlv\n\t\t\t\t\t\t\t\t\tlkdfjglerjtkrjkljsd.lkvjlkajlfk\n\t\t\t\t\t\t\tlskfjlksjljslvjxjlvkzjljajoiwjejlskjslfj.slkjflskjldfkjoietruioskljfkljf\n\t\t\t\t\tlkasjfljsaljlxkcjzljvl.asljlksaj\n\t\t\t\tasldjflksajf\n\t\t\t\talskjflkasjlvkja\n\t\t\t\twioeuoiwutrljsgfjlskfg\n\t\t\t\taslkjvlksjvlkjsflgj\n\t\t\t\t\tlkvnlksfgk.salfkjaslfjskljfv\n\t\t\tlksdjflsajlkfj\n\t\t\tlasjflaskjlk\n\t\tlsakjflkasjfkljas\n\t\tlskjvljvlkjlsjfkgljfg\n\tsaljkglksajvlkjvkljlkjvksdj\n\tlsakjglksajkvjlkjdklvj\n\tlskjflksjglkdjbkljdbkjslkj\n\t\tlkjglkfjkljsdflj\n\t\t\tlskjfglkjdfgkljsdflj\n\t\t\t\tlkfjglksdjlkjbsdlkjbk\n\t\t\t\t\tlkfgjlejrtljkljsdflgjl\n\t\t\t\t\tsalgkfjlksfjgkljsgfjl\n\t\t\t\t\tsalkflajwoieu\n\t\t\t\t\t\tlaskjfglsjfgljkkvjsdlkjbklds\n\t\t\t\t\t\t\tlasjglriotuojgkjsldfgjsklfgjl\n\t\t\t\t\t\t\t\tlkajglkjskljsdljblkdfjblfjlbjs\n\t\t\t\t\t\t\t\t\tlkajgljroituksfglkjslkjgoi\n\t\t\t\t\t\t\t\t\t\tlkjglkjkljkljdkbljsdfljgklfdj\n\t\t\t\t\t\t\t\t\t\t\tlkjlgkjljgslkdkldjblkj\n\t\t\t\t\t\t\t\t\t\t\t\tlkjfglkjlkjbsdklj.slgfjalksjglkfjglf\n\t\t\t\t\t\t\t\t\t\t\t\tlkasjrlkjwlrjljsl\n\t\t\t\t\t\t\t\t\t\t\t\t\tlksjgflkjfklgjljbljls\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlkjsglkjlkjfkljdklbjkldf\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlkjglkjdlsfjdglsdjgjlxljjlrjsgjsjlk\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlkjsgkllksjfgjljdslfkjlkasjdflkjxcljvlkjsgkljsfg\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlaskjlkjsakljglsdjfgksdjlkgjdlskjb\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlkajsgfljfklgjlkdjgfklsdjklj\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlkjfglkjlkgjlkjl.aslkjflasjlajglkjaf\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlkjasflgjlskjglkfjgklgsdjflkbjsdklfjskldfjgklsfdjgklfdjgl\n\tlskadjlkjsldwwwwwfj\n\t\tlkjflkasjlfjlkjajslfkjlasjkdlfjlaskjalvwwwwwwwwwwwwwwwkjlsjfglkjalsjgflkjaljlkdsjslbjsljksldjlsjdlkjljvblkjlkajfljgasljfkajgfljfjgldjblkjsdljgsldjg.skljf")); // 528 这个有问题
