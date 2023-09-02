/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = function(hours, target) {
  let num = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      num++;
    }
  }
  return num;
};

export { numberOfEmployeesWhoMetTarget };
