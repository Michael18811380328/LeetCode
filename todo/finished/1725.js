/**
 * @param {number[][]} rectangles
 * @return {number}
 */
// 92 ms, 在所有 JavaScript 提交中击败了76.84%
var countGoodRectangles = function(rectangles) {
    let max;
    let times;
    rectangles.forEach(item => {
        let size = item[0] > item[1] ? item[1] : item[0];
        if ((max && size > max) || !max) {
            times = 1;
            max = size;
        }
        else if (max && size === max) {
            times++;
        }
    });
    return times;
};