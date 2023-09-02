/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = function(details) {
  let num = 0;
  for (let i = 0; i < details.length; i++) {
    const age = Number(details[i].slice(11, 13));
    if (age > 60) {
      num++;
    }
  }
  return num;
};

export { countSeniors };
