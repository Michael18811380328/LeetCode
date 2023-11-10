var dayjs = require('dayjs');
// 实际问题：日期列中，有一个固定的格式；用户输入一个不符合格式的字符串，怎样转换
// 要求：大部分用户输入符合的日期格式，少部分不符合格式，不考虑用户大量输入的情况（输入长度超过100）
// 例如：日期格式是 YYYY-MM-DD DD-MM-YYYY HH:mm:ss，用户输入 2000 12 10 这个情况

/**
 * [description]
 * @author Michael An
 * @DateTime 2022-04-22T11:33:50+0800
 * @param    {[string]}                 str              [user input invalid date string]
 * @param    {[type]}                 dateColumnFormat [date column format, optional]
 * @return   {[string]}                                  [valid date string]
 */
let transferStr2Date = (str, dateColumnFormat) => {
  // use space to replace non number
  let str1 = str.replace(/\D/g, ' ');
  let arr1 = str1.split(' ').filter(item => item.length > 0);
  let yearIndex = arr1.findIndex(item => item.length === 4);
  // if year not found, return '';
  if (yearIndex === -1) {
    return '';
  }
  let year = arr1[yearIndex];
  let res = year;
  if (arr1[yearIndex + 1]) {
    let month = arr1[yearIndex + 1];
    res = res + '-' + month;
  }
  if (arr1[yearIndex + 2]) {
    let day = arr1[yearIndex + 2];
    res = res + '-' + day;
  }
  if (arr1[yearIndex + 3]) {
    let hour = arr1[yearIndex + 3];
    res = res + ' ' + hour;
  }
  if (arr1[yearIndex + 4]) {
    let min = arr1[yearIndex + 4];
    res = res + ':' + min;
  }
  if (arr1[yearIndex + 5]) {
    let sec = arr1[yearIndex + 5];
    res = res + ':' + sec;
  }
  // If date is not valid(2000-02-30), return Invalid Date
  let dateObj = dayjs(res);
  // if no date column format, user default YYYY-MM-DD format
  if (dateColumnFormat) {
    return dayjs(dateObj).format(dateColumnFormat);
  } else {
    return dayjs(dateObj).format('YYYY-MM-DD');
  }
}

// test
transferStr2Date('2000 12 10');
transferStr2Date('2000-12-10');
transferStr2Date('今天是2000年12月10日');
transferStr2Date('现在是2000年12月10日，21点30分');
transferStr2Date('现在是2000年12月10日，21点30分08秒');

// don't handle this input, "12月 10日 2020年"
