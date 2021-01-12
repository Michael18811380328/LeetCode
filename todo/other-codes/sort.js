/* BubbleSort O(N*N) */
function bubbleSort(arr) {
  for(let i = 0,l=arr.length;i<l-1;i++) {
    for(let j = i+1;j<l;j++) { 
      if(arr[i]>arr[j]) {
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
      }
    }
  }
  return arr;
}

/** insert sort
*  O(n*n)
**/

function insertSort(arr) {
  for(let i = 1 ,l = arr.length;i<l;i++) {
      let j = i;
      let tem = arr[i];
      while(j>0&&tem<arr[j-1]) {
          arr[j] = arr[j-1];
          j--;
      }
      arr[j] = tem;
  }
  return arr;
}

/**
* shell sort O(Nlog2N) 希尔排序
**/
function shellSort(arr) {
  let l = arr.length;
  let gap = l >> 1;
  
  while(gap>0) {
      for(let i = gap;i<l;i++) {
          let tem = arr[i];
          let j = i - gap; 
          for(;j>=0&&tem<arr[j];j-=gap){
              arr[j+gap] = arr[j];
          }
          arr[j+gap] = tem;
      }
      gap = gap >> 1;
  }
  return arr;
}

/**
* Selection Sort 
**/
function selectionSort(arr) {
  for(let i=0;i<arr.length-1;i++) {
      let min = arr[i];
      for(let j= i+1;j<arr.length;j++) {
          if(min>arr[j]) {
              let tem = min;
              min = arr[j];
              arr[j] = tem;
          }
      }
      arr[i] = min;
  }
  return arr;
}
/**
 * heap sort  O(nlogn) https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F
 **/
function heapSort(arr) {
  // set the parent target and children target
  let maxHelpify = function(arr, start, end) {
    let dad = start;
    let son = 2 * dad + 1;
    while (son <= end) {
      if (son + 1 <= end && arr[son] < arr[son + 1]) {
        son++;
      }
      if (arr[dad] > arr[son]) {
        return;
      } else {
        let tem = arr[son];
        arr[son] = arr[dad];
        arr[dad] = tem;
        dad = son;
        son = dad*2 +1;
      }
    }
  }
  
  let len = arr.length;
  for(let i = Math.floor(len / 2 - 1);i>=0;i--){
    maxHelpify(arr,i,len - 1);
  }
  for(let i = len - 1; i>0; i--) {
    let tem = arr[i];
    arr[i] = arr[0];
    arr[0] = tem;
    maxHelpify(arr,0,i - 1);
  }
  return arr;  
}


/**
* Quick Sort  O(NLogN)
**/ 
function quickSort(arr) {
  if(arr.length<=1) {
      return arr;
  }
  let leftArr = [];
  let rightArr = [];
  let q = arr[0];
  for(let i = 1,l=arr.length; i<l; i++) {
      if(arr[i]>q) {
          rightArr.push(arr[i]);
      }else{
          leftArr.push(arr[i]);
      }
  }
  return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}
