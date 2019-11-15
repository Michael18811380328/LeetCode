// // 48 旋转图像：把一个n*n的矩阵顺时针旋转90度。在原始矩阵上变化，不能使用新的矩阵。
// // 给定 matrix =
// // [
// //   [1,2,3],
// //   [4,5,6],
// //   [7,8,9]
// // ],

// // 原地旋转输入矩阵，使其变为:
// // [
// //   [7,4,1],
// //   [8,5,2],
// //   [9,6,3]
// // ]

// // 思路：实际上把矩阵分成多层,，然后每一层移动原来的边长的位置
// // 思路0：递归遍历数组内部，然后获取当前边长减去递归的层数的旋转的index。然后换顺序。
// // 这样需要多次遍历数组，然后不在原始数组操作，性能不好


// // 思路一：更换数组中元素的顺序。如果变成是n,那么依次调换这个n个元素的位置，这样就很节省性能。然后遍历四分之一的数组，就可以旋转数组。这个需要处理一个辅助函数处理n个元素换位置
// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// const testmatrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];

// function moveFour(a, b, c, d) {
//   // 函数不应当直接修改参数
//   return [d, a, b, c];
// }

// moveFour(1, 2, 3, 4);

// function rotateImage(matrix) {
//   const arrayLen = matrix.length;
//   // 现在旋转了对角线元素的位置
//   for (let i = 0; i < arrayLen / 2; i++) {
//     for (let j = arrayLen - i - 2; j >= i; j--) {
//       // console.log(i, j);
//       // 现在ij获取的是正确的，但是旋转的四个元素是不正确的
//       // let result = moveFour(matrix[i][i], matrix[i][arrayLen - i - 1], matrix[arrayLen - i - 1][i], matrix[arrayLen - i - 1][arrayLen - j - 1]);
//       // matrix[i][i] = result[0];
//       // matrix[i][arrayLen - i - 1] = result[1];
//       // matrix[arrayLen - i - 1][arrayLen - i - 1] = result[2];
//       // matrix[arrayLen - i - 1][i] = result[3];
//     }
//     // let result = moveFour(matrix[i][i], matrix[i][arrayLen - i - 1], matrix[arrayLen - i - 1][i], matrix[arrayLen - i - 1][arrayLen - i - 1]);
//     // matrix[i][i] = result[0];
//     // matrix[i][arrayLen - i - 1] = result[1];
//     // matrix[arrayLen - i - 1][arrayLen - i - 1] = result[2];
//     // matrix[arrayLen - i - 1][i] = result[3];
//   }
// }

// rotateImage(testmatrix);
// // console.log(testmatrix);


// // 应该可以通过矩阵变换的方法获取答案。现在对于二维矩阵可以计算，对于三维矩阵不能解答。

// export default rotateImage;
