/**
 * return the formatted date with target format.
 * @param {string|date object} date
 * @param {string} format
 * @returns {string} formatted date
 */
function format(date, format) {
  const dateObject = this.getValidDate(date);
  // 获取不到时间对象，返回原来的字符串
  if (!dateObject) {
    return date;
  }
  
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  const displayMonth = month < 10 ? `0${month}` : month;
  const displayDay = day < 10 ? `0${day}` : day;

  const upperCaseFormat = format && format.toUpperCase();
  // 根据大写的格式，返回不同字符串
  switch (upperCaseFormat) {

    case 'YYYY-MM-DD HH:MM:SS': {
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const seconds = dateObject.getSeconds();
      const displayHours = hours < 10 ? `0${hours}` : hours;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
      return `${year}-${displayMonth}-${displayDay} ${displayHours}:${displayMinutes}:${displaySeconds}`;
    }

    case 'YYYY-MM-DD HH:MM':
    case 'YYYY-MM-DD HH:mm': {
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const displayHours = hours < 10 ? `0${hours}` : hours;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${year}-${displayMonth}-${displayDay} ${displayHours}:${displayMinutes}`;
    }

    case 'D/M/YYYY':
    case 'DD/MM/YYYY': {
      return `${displayDay}/${displayMonth}/${year}`;
    }

    case 'D/M/YYYY HH:mm':
    case 'DD/MM/YYYY HH:mm': {
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const displayHours = hours < 10 ? `0${hours}` : hours;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${displayDay}/${displayMonth}/${year} ${displayHours}:${displayMinutes}`;
    }

    case 'M/D/YYYY': {
      return `${month}/${day}/${year}`;
    }

    case 'M/D/YYYY HH:mm': {
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const displayHours = hours < 10 ? `0${hours}` : hours;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${month}/${day}/${year} ${displayHours}:${displayMinutes}`;
    }

    case 'YYYY-MM-DD': {
      return `${year}-${displayMonth}-${displayDay}`;
    }

    default: {
      return `${year}-${displayMonth}-${displayDay}`;
    }
  }
}

/**
 * 获取有效的日期
 * @param {日期字符串} date 
 * @returns 日期对象或者 null
 */
function getValidDate(date) {
  if (!date) {
    return null;
  }
  // 如果是字符串，那么去掉分隔符，转换成时间对象
  const dateObject = typeof date === 'string' ? new Date(date.replace('-', '/')) : date;
  // 如果是 Date 对象的实例，并且获取时间不是 NaN，返回日期对象（有效的日期）
  if (dateObject instanceof Date && !isNaN(dateObject.getTime())) {
    return dateObject;
  }
  return null;
}
