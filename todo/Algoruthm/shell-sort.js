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

module.exports = shellSort;
