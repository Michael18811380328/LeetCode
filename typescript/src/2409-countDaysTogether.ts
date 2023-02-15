function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
): number {
  const dayOfYear = function (date: string): number {
    const month = Number(date.slice(0, 2));
    const day = Number(date.slice(3));
    const getMonthDays = (month: number): number => {
      let sum = 0;
      const month31 = [1, 3, 5, 7, 8, 10, 12];
      for (let i = 1; i <= month; i++) {
        if (i === 2) {
          sum += 28;
        } else if (month31.includes(i)) {
          sum += 31;
        } else {
          sum += 30;
        }
      }
      return sum;
    };
    return getMonthDays(month - 1) + day;
  };
  const alice = [dayOfYear(arriveAlice), dayOfYear(leaveAlice)];
  const bob = [dayOfYear(arriveBob), dayOfYear(leaveBob)];
  if (alice[1] < bob[0]) return 0;
  if (bob[1] < alice[0]) return 0;
  const days = [...alice, ...bob].sort((a, b) => (a > b ? 1 : -1));
  return days[2] - days[1] + 1;
}

export {countDaysTogether};
